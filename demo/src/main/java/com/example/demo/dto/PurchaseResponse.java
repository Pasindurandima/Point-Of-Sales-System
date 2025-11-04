package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseResponse {
    
    private Long id;
    private String purchaseNumber;
    private SupplierResponse supplier;
    private LocalDateTime purchaseDate;
    private List<PurchaseItemResponse> items;
    private BigDecimal subtotal;
    private BigDecimal tax;
    private BigDecimal total;
    private String status;
    private String notes;
    private LocalDateTime createdAt;
}
