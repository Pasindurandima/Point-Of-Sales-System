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
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StockAdjustmentService {

    private final StockAdjustmentRepository stockAdjustmentRepository;
    private final StockAdjustmentItemRepository stockAdjustmentItemRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final DtoMapper dtoMapper;

    @Transactional
    public StockAdjustmentResponse createStockAdjustment(StockAdjustmentRequest request) {
        // Get current user
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        // Create stock adjustment
        StockAdjustment stockAdjustment = StockAdjustment.builder()
                .referenceNumber(generateReferenceNumber())
                .adjustmentDate(request.getAdjustmentDate())
                .location(request.getLocation())
                .adjustmentType(StockAdjustment.AdjustmentType.valueOf(request.getAdjustmentType()))
                .reason(StockAdjustment.AdjustmentReason.valueOf(request.getReason()))
                .items(new ArrayList<>())
                .totalAmount(BigDecimal.ZERO)
                .totalQuantity(0)
                .user(user)
                .notes(request.getNotes())
                .documentPath(request.getDocumentPath())
                .build();

        // Process stock adjustment items
        BigDecimal totalAmount = BigDecimal.ZERO;
        int totalQuantity = 0;

        for (StockAdjustmentItemRequest itemRequest : request.getItems()) {
            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + itemRequest.getProductId()));

            StockAdjustmentItem.ItemAdjustmentType itemAdjustmentType = 
                    StockAdjustmentItem.ItemAdjustmentType.valueOf(itemRequest.getAdjustmentType());

            // Validate stock for SUBTRACT operations
            if (itemAdjustmentType == StockAdjustmentItem.ItemAdjustmentType.SUBTRACT) {
                if (product.getQuantity() < itemRequest.getQuantity()) {
                    throw new BadRequestException("Insufficient stock for product: " + product.getName() + 
                            ". Available: " + product.getQuantity() + ", Requested: " + itemRequest.getQuantity());
                }
            }

            // Calculate subtotal
            BigDecimal subtotal = itemRequest.getUnitCost().multiply(BigDecimal.valueOf(itemRequest.getQuantity()));

            // Create stock adjustment item
            StockAdjustmentItem adjustmentItem = StockAdjustmentItem.builder()
                    .stockAdjustment(stockAdjustment)
                    .product(product)
                    .adjustmentType(itemAdjustmentType)
                    .currentStock(product.getQuantity())
                    .quantity(itemRequest.getQuantity())
                    .unitCost(itemRequest.getUnitCost())
                    .subtotal(subtotal)
                    .build();

            stockAdjustment.getItems().add(adjustmentItem);

            totalAmount = totalAmount.add(subtotal);
            totalQuantity += itemRequest.getQuantity();

            // Update product quantity based on adjustment type
            if (itemAdjustmentType == StockAdjustmentItem.ItemAdjustmentType.ADD) {
                product.setQuantity(product.getQuantity() + itemRequest.getQuantity());
            } else {
                product.setQuantity(product.getQuantity() - itemRequest.getQuantity());
            }
            productRepository.save(product);
        }

        // Set totals
        stockAdjustment.setTotalAmount(totalAmount);
        stockAdjustment.setTotalQuantity(totalQuantity);

        StockAdjustment savedAdjustment = stockAdjustmentRepository.save(stockAdjustment);
        return dtoMapper.toStockAdjustmentResponse(savedAdjustment);
    }

    public StockAdjustmentResponse getStockAdjustment(Long id) {
        StockAdjustment stockAdjustment = stockAdjustmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock adjustment not found with id: " + id));
        return dtoMapper.toStockAdjustmentResponse(stockAdjustment);
    }

    public List<StockAdjustmentResponse> getAllStockAdjustments() {
        return stockAdjustmentRepository.findAllActive().stream()
                .map(dtoMapper::toStockAdjustmentResponse)
                .collect(Collectors.toList());
    }

    public List<StockAdjustmentResponse> getStockAdjustmentsByLocation(String location) {
        return stockAdjustmentRepository.findByLocation(location).stream()
                .map(dtoMapper::toStockAdjustmentResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public StockAdjustmentResponse updateStockAdjustment(Long id, StockAdjustmentRequest request) {
        StockAdjustment stockAdjustment = stockAdjustmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock adjustment not found with id: " + id));

        // Revert previous stock changes
        for (StockAdjustmentItem item : stockAdjustment.getItems()) {
            Product product = item.getProduct();
            if (item.getAdjustmentType() == StockAdjustmentItem.ItemAdjustmentType.ADD) {
                product.setQuantity(product.getQuantity() - item.getQuantity());
            } else {
                product.setQuantity(product.getQuantity() + item.getQuantity());
            }
            productRepository.save(product);
        }

        // Clear existing items
        stockAdjustment.getItems().clear();

        // Update stock adjustment details
        stockAdjustment.setAdjustmentDate(request.getAdjustmentDate());
        stockAdjustment.setLocation(request.getLocation());
        stockAdjustment.setAdjustmentType(StockAdjustment.AdjustmentType.valueOf(request.getAdjustmentType()));
        stockAdjustment.setReason(StockAdjustment.AdjustmentReason.valueOf(request.getReason()));
        stockAdjustment.setNotes(request.getNotes());
        stockAdjustment.setDocumentPath(request.getDocumentPath());

        // Process new items
        BigDecimal totalAmount = BigDecimal.ZERO;
        int totalQuantity = 0;

        for (StockAdjustmentItemRequest itemRequest : request.getItems()) {
            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + itemRequest.getProductId()));

            StockAdjustmentItem.ItemAdjustmentType itemAdjustmentType = 
                    StockAdjustmentItem.ItemAdjustmentType.valueOf(itemRequest.getAdjustmentType());

            // Validate stock for SUBTRACT operations
            if (itemAdjustmentType == StockAdjustmentItem.ItemAdjustmentType.SUBTRACT) {
                if (product.getQuantity() < itemRequest.getQuantity()) {
                    throw new BadRequestException("Insufficient stock for product: " + product.getName() + 
                            ". Available: " + product.getQuantity() + ", Requested: " + itemRequest.getQuantity());
                }
            }

            // Calculate subtotal
            BigDecimal subtotal = itemRequest.getUnitCost().multiply(BigDecimal.valueOf(itemRequest.getQuantity()));

            // Create stock adjustment item
            StockAdjustmentItem adjustmentItem = StockAdjustmentItem.builder()
                    .stockAdjustment(stockAdjustment)
                    .product(product)
                    .adjustmentType(itemAdjustmentType)
                    .currentStock(product.getQuantity())
                    .quantity(itemRequest.getQuantity())
                    .unitCost(itemRequest.getUnitCost())
                    .subtotal(subtotal)
                    .build();

            stockAdjustment.getItems().add(adjustmentItem);

            totalAmount = totalAmount.add(subtotal);
            totalQuantity += itemRequest.getQuantity();

            // Update product quantity
            if (itemAdjustmentType == StockAdjustmentItem.ItemAdjustmentType.ADD) {
                product.setQuantity(product.getQuantity() + itemRequest.getQuantity());
            } else {
                product.setQuantity(product.getQuantity() - itemRequest.getQuantity());
            }
            productRepository.save(product);
        }

        // Set totals
        stockAdjustment.setTotalAmount(totalAmount);
        stockAdjustment.setTotalQuantity(totalQuantity);

        StockAdjustment updatedAdjustment = stockAdjustmentRepository.save(stockAdjustment);
        return dtoMapper.toStockAdjustmentResponse(updatedAdjustment);
    }

    @Transactional
    public void deleteStockAdjustment(Long id) {
        StockAdjustment stockAdjustment = stockAdjustmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Stock adjustment not found with id: " + id));

        // Revert stock changes
        for (StockAdjustmentItem item : stockAdjustment.getItems()) {
            Product product = item.getProduct();
            if (item.getAdjustmentType() == StockAdjustmentItem.ItemAdjustmentType.ADD) {
                product.setQuantity(product.getQuantity() - item.getQuantity());
            } else {
                product.setQuantity(product.getQuantity() + item.getQuantity());
            }
            productRepository.save(product);
        }

        // Soft delete
        stockAdjustment.setIsActive(false);
        stockAdjustmentRepository.save(stockAdjustment);
    }

    private String generateReferenceNumber() {
        Integer maxNumber = stockAdjustmentRepository.findMaxReferenceNumber();
        int nextNumber = (maxNumber != null ? maxNumber : 0) + 1;
        return String.format("SA-%04d", nextNumber);
    }
}
