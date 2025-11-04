package com.example.demo.util;

import com.example.demo.dto.*;
import com.example.demo.entity.*;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class DtoMapper {

    // Product mappings
    public ProductResponse toProductResponse(Product product) {
        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .sku(product.getSku())
                .description(product.getDescription())
                .category(product.getCategory() != null ? toCategoryResponse(product.getCategory()) : null)
                .brand(product.getBrand() != null ? toBrandResponse(product.getBrand()) : null)
                .unit(product.getUnit())
                .costPrice(product.getCostPrice())
                .sellingPrice(product.getSellingPrice())
                .quantity(product.getQuantity())
                .alertQuantity(product.getAlertQuantity())
                .barcode(product.getBarcode())
                .imageUrl(product.getImageUrl())
                .taxRate(product.getTaxRate())
                .isActive(product.getIsActive())
                .createdAt(product.getCreatedAt())
                .updatedAt(product.getUpdatedAt())
                .build();
    }

    // Category mappings
    public CategoryResponse toCategoryResponse(Category category) {
        return CategoryResponse.builder()
                .id(category.getId())
                .name(category.getName())
                .description(category.getDescription())
                .isActive(category.getIsActive())
                .createdAt(category.getCreatedAt())
                .build();
    }

    // Brand mappings
    public BrandResponse toBrandResponse(Brand brand) {
        return BrandResponse.builder()
                .id(brand.getId())
                .name(brand.getName())
                .description(brand.getDescription())
                .isActive(brand.getIsActive())
                .createdAt(brand.getCreatedAt())
                .build();
    }

    // Customer mappings
    public CustomerResponse toCustomerResponse(Customer customer) {
        return CustomerResponse.builder()
                .id(customer.getId())
                .name(customer.getName())
                .email(customer.getEmail())
                .phone(customer.getPhone())
                .address(customer.getAddress())
                .city(customer.getCity())
                .state(customer.getState())
                .zipCode(customer.getZipCode())
                .customerGroup(customer.getCustomerGroup() != null ? customer.getCustomerGroup().name() : null)
                .isActive(customer.getIsActive())
                .createdAt(customer.getCreatedAt())
                .build();
    }

    // Supplier mappings
    public SupplierResponse toSupplierResponse(Supplier supplier) {
        return SupplierResponse.builder()
                .id(supplier.getId())
                .name(supplier.getName())
                .email(supplier.getEmail())
                .phone(supplier.getPhone())
                .address(supplier.getAddress())
                .city(supplier.getCity())
                .state(supplier.getState())
                .zipCode(supplier.getZipCode())
                .contactPerson(supplier.getContactPerson())
                .isActive(supplier.getIsActive())
                .createdAt(supplier.getCreatedAt())
                .build();
    }

    // Sale mappings
    public SaleResponse toSaleResponse(Sale sale) {
        return SaleResponse.builder()
                .id(sale.getId())
                .invoiceNumber(sale.getInvoiceNumber())
                .customer(sale.getCustomer() != null ? toCustomerResponse(sale.getCustomer()) : null)
                .saleDate(sale.getSaleDate())
                .items(sale.getItems().stream()
                        .map(this::toSaleItemResponse)
                        .collect(Collectors.toList()))
                .subtotal(sale.getSubtotal())
                .tax(sale.getTax())
                .discount(sale.getDiscount())
                .total(sale.getTotal())
                .paidAmount(sale.getPaidAmount())
                .changeAmount(sale.getChangeAmount())
                .paymentMethod(sale.getPaymentMethod().name())
                .status(sale.getStatus().name())
                .notes(sale.getNotes())
                .createdAt(sale.getCreatedAt())
                .build();
    }

    public SaleItemResponse toSaleItemResponse(SaleItem item) {
        return SaleItemResponse.builder()
                .id(item.getId())
                .product(toProductResponse(item.getProduct()))
                .quantity(item.getQuantity())
                .unitPrice(item.getUnitPrice())
                .subtotal(item.getSubtotal())
                .taxRate(item.getTaxRate())
                .taxAmount(item.getTaxAmount())
                .total(item.getTotal())
                .build();
    }

    // Purchase mappings
    public PurchaseResponse toPurchaseResponse(Purchase purchase) {
        return PurchaseResponse.builder()
                .id(purchase.getId())
                .purchaseNumber(purchase.getPurchaseNumber())
                .supplier(purchase.getSupplier() != null ? toSupplierResponse(purchase.getSupplier()) : null)
                .purchaseDate(purchase.getPurchaseDate())
                .items(purchase.getItems().stream()
                        .map(this::toPurchaseItemResponse)
                        .collect(Collectors.toList()))
                .subtotal(purchase.getSubtotal())
                .tax(purchase.getTax())
                .total(purchase.getTotal())
                .status(purchase.getStatus().name())
                .notes(purchase.getNotes())
                .createdAt(purchase.getCreatedAt())
                .build();
    }

    public PurchaseItemResponse toPurchaseItemResponse(PurchaseItem item) {
        return PurchaseItemResponse.builder()
                .id(item.getId())
                .product(toProductResponse(item.getProduct()))
                .quantity(item.getQuantity())
                .unitCost(item.getUnitCost())
                .subtotal(item.getSubtotal())
                .taxRate(item.getTaxRate())
                .taxAmount(item.getTaxAmount())
                .total(item.getTotal())
                .build();
    }

    // Expense mappings
    public ExpenseResponse toExpenseResponse(Expense expense) {
        return ExpenseResponse.builder()
                .id(expense.getId())
                .title(expense.getTitle())
                .description(expense.getDescription())
                .amount(expense.getAmount())
                .expenseDate(expense.getExpenseDate())
                .category(expense.getCategory().name())
                .paymentMethod(expense.getPaymentMethod().name())
                .documentUrl(expense.getDocumentUrl())
                .isActive(expense.getIsActive())
                .createdAt(expense.getCreatedAt())
                .build();
    }
}
