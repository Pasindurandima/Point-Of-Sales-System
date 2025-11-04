package com.example.demo.service;

import com.example.demo.dto.ExpenseRequest;
import com.example.demo.dto.ExpenseResponse;
import com.example.demo.entity.Expense;
import com.example.demo.entity.User;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;
    private final DtoMapper dtoMapper;

    @Transactional
    public ExpenseResponse createExpense(ExpenseRequest request) {
        // Get current user
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Expense expense = Expense.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .amount(request.getAmount())
                .expenseDate(request.getExpenseDate())
                .category(Expense.ExpenseCategory.valueOf(request.getCategory()))
                .paymentMethod(Expense.PaymentMethod.valueOf(request.getPaymentMethod()))
                .documentUrl(request.getDocumentUrl())
                .user(user)
                .build();

        Expense savedExpense = expenseRepository.save(expense);
        return dtoMapper.toExpenseResponse(savedExpense);
    }

    @Transactional
    public ExpenseResponse updateExpense(Long id, ExpenseRequest request) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Expense not found with id: " + id));

        expense.setTitle(request.getTitle());
        expense.setDescription(request.getDescription());
        expense.setAmount(request.getAmount());
        expense.setExpenseDate(request.getExpenseDate());
        expense.setCategory(Expense.ExpenseCategory.valueOf(request.getCategory()));
        expense.setPaymentMethod(Expense.PaymentMethod.valueOf(request.getPaymentMethod()));
        expense.setDocumentUrl(request.getDocumentUrl());

        Expense updatedExpense = expenseRepository.save(expense);
        return dtoMapper.toExpenseResponse(updatedExpense);
    }

    public ExpenseResponse getExpense(Long id) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Expense not found with id: " + id));
        return dtoMapper.toExpenseResponse(expense);
    }

    public List<ExpenseResponse> getAllExpenses() {
        return expenseRepository.findAllOrderByDateDesc().stream()
                .map(dtoMapper::toExpenseResponse)
                .collect(Collectors.toList());
    }

    public List<ExpenseResponse> getExpensesByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        return expenseRepository.findExpensesByDateRange(startDate, endDate).stream()
                .map(dtoMapper::toExpenseResponse)
                .collect(Collectors.toList());
    }

    public List<ExpenseResponse> getExpensesByCategory(String category) {
        return expenseRepository.findByCategory(Expense.ExpenseCategory.valueOf(category)).stream()
                .map(dtoMapper::toExpenseResponse)
                .collect(Collectors.toList());
    }

    public BigDecimal getTotalExpensesByDateRange(LocalDateTime startDate, LocalDateTime endDate) {
        BigDecimal total = expenseRepository.getTotalExpensesByDateRange(startDate, endDate);
        return total != null ? total : BigDecimal.ZERO;
    }

    @Transactional
    public void deleteExpense(Long id) {
        Expense expense = expenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Expense not found with id: " + id));
        expense.setIsActive(false);
        expenseRepository.save(expense);
    }
}
