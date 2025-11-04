package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExpenseRequest {

    @NotBlank(message = "Expense title is required")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 255 characters")
    private String title;

    private String description;

    @NotNull(message = "Amount is required")
    @DecimalMin(value = "0.0", inclusive = false, message = "Amount must be greater than 0")
    private BigDecimal amount;

    @NotNull(message = "Expense date is required")
    private LocalDateTime expenseDate;

    @NotNull(message = "Category is required")
    private String category; // OFFICE_SUPPLIES, UTILITIES, SALARIES, RENT, MAINTENANCE, MARKETING, OTHER

    @NotNull(message = "Payment method is required")
    private String paymentMethod; // CASH, CARD, BANK_TRANSFER

    private String documentUrl;
}
