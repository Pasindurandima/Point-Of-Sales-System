package com.example.demo.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseRequest {

    @NotNull(message = "Supplier ID is required")
    private Long supplierId;

    @NotNull(message = "Purchase date is required")
    private LocalDateTime purchaseDate;

    @NotEmpty(message = "Purchase must have at least one item")
    @Valid
    private List<PurchaseItemRequest> items;

    private String notes;
}
