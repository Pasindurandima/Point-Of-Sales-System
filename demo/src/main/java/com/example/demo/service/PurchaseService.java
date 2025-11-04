package com.example.demo.service;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.*;
import com.example.demo.util.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;
    private final ProductRepository productRepository;
    private final SupplierRepository supplierRepository;
    private final UserRepository userRepository;
    private final DtoMapper dtoMapper;

    @Transactional
    public PurchaseResponse createPurchase(PurchaseRequest request) {
        // Get current user
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Validate supplier
        Supplier supplier = supplierRepository.findById(request.getSupplierId())
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with id: " + request.getSupplierId()));

        // Create purchase
        Purchase purchase = Purchase.builder()
                .purchaseNumber(generatePurchaseNumber())
                .supplier(supplier)
                .purchaseDate(request.getPurchaseDate())
                .items(new ArrayList<>())
                .subtotal(BigDecimal.ZERO)
                .tax(BigDecimal.ZERO)
                .total(BigDecimal.ZERO)
                .status(Purchase.PurchaseStatus.RECEIVED)
                .user(user)
                .notes(request.getNotes())
                .build();

        // Process purchase items
        BigDecimal subtotal = BigDecimal.ZERO;
        BigDecimal totalTax = BigDecimal.ZERO;

        for (PurchaseItemRequest itemRequest : request.getItems()) {
            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + itemRequest.getProductId()));

            // Calculate amounts
            BigDecimal itemSubtotal = itemRequest.getUnitCost().multiply(BigDecimal.valueOf(itemRequest.getQuantity()));
            BigDecimal taxRate = product.getTaxRate() != null ? product.getTaxRate() : BigDecimal.ZERO;
            BigDecimal taxAmount = itemSubtotal.multiply(taxRate).divide(BigDecimal.valueOf(100));
            BigDecimal itemTotal = itemSubtotal.add(taxAmount);

            // Create purchase item
            PurchaseItem purchaseItem = PurchaseItem.builder()
                    .purchase(purchase)
                    .product(product)
                    .quantity(itemRequest.getQuantity())
                    .unitCost(itemRequest.getUnitCost())
                    .subtotal(itemSubtotal)
                    .taxRate(taxRate)
                    .taxAmount(taxAmount)
                    .total(itemTotal)
                    .build();

            purchase.getItems().add(purchaseItem);

            subtotal = subtotal.add(itemSubtotal);
            totalTax = totalTax.add(taxAmount);

            // Update product quantity and cost price
            product.setQuantity(product.getQuantity() + itemRequest.getQuantity());
            product.setCostPrice(itemRequest.getUnitCost());
            productRepository.save(product);
        }

        // Calculate purchase totals
        BigDecimal total = subtotal.add(totalTax);

        purchase.setSubtotal(subtotal);
        purchase.setTax(totalTax);
        purchase.setTotal(total);

        Purchase savedPurchase = purchaseRepository.save(purchase);
        return dtoMapper.toPurchaseResponse(savedPurchase);
    }

    public PurchaseResponse getPurchase(Long id) {
        Purchase purchase = purchaseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Purchase not found with id: " + id));
        return dtoMapper.toPurchaseResponse(purchase);
    }

    public List<PurchaseResponse> getAllPurchases() {
        return purchaseRepository.findAllOrderByDateDesc().stream()
                .map(dtoMapper::toPurchaseResponse)
                .collect(Collectors.toList());
    }

    public List<PurchaseResponse> getPurchasesByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return purchaseRepository.findPurchasesByDateRange(startDate, endDate).stream()
                .map(dtoMapper::toPurchaseResponse)
                .collect(Collectors.toList());
    }

    public List<PurchaseResponse> getPurchasesBySupplier(Long supplierId) {
        return purchaseRepository.findBySupplierId(supplierId).stream()
                .map(dtoMapper::toPurchaseResponse)
                .collect(Collectors.toList());
    }

    public BigDecimal getTotalPurchasesByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        BigDecimal total = purchaseRepository.getTotalPurchasesByDateRange(startDate, endDate);
        return total != null ? total : BigDecimal.ZERO;
    }

    @Transactional
    public void cancelPurchase(Long id) {
        Purchase purchase = purchaseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Purchase not found with id: " + id));

        if (purchase.getStatus() == Purchase.PurchaseStatus.CANCELLED) {
            throw new BadRequestException("Purchase is already cancelled");
        }

        // Restore product quantities
        for (PurchaseItem item : purchase.getItems()) {
            Product product = item.getProduct();
            product.setQuantity(product.getQuantity() - item.getQuantity());
            productRepository.save(product);
        }

        purchase.setStatus(Purchase.PurchaseStatus.CANCELLED);
        purchaseRepository.save(purchase);
    }

    private String generatePurchaseNumber() {
        String prefix = "PUR";
        String timestamp = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        return prefix + timestamp;
    }
}
