package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseResponse {
    
    private Long id;
    private String title;
    private String description;
    private BigDecimal amount;
    private LocalDateTime expenseDate;
    private String category;
    private String paymentMethod;
    private String documentUrl;
    private Boolean isActive;
    private LocalDateTime createdAt;
}
