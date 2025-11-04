package com.example.demo.service;

import com.example.demo.dto.DashboardStats;
import com.example.demo.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final ProductRepository productRepository;
    private final CustomerRepository customerRepository;
    private final SupplierRepository supplierRepository;
    private final SaleRepository saleRepository;
    private final PurchaseRepository purchaseRepository;
    private final ExpenseRepository expenseRepository;

    public DashboardStats getDashboardStats() {
        LocalDateTime now = LocalDateTime.now();
        
        // Today's date range
        LocalDateTime todayStart = now.toLocalDate().atStartOfDay();
        LocalDateTime todayEnd = now.toLocalDate().atTime(LocalTime.MAX);
        
        // This month's date range
        LocalDateTime monthStart = now.withDayOfMonth(1).toLocalDate().atStartOfDay();
        LocalDateTime monthEnd = now.withDayOfMonth(now.toLocalDate().lengthOfMonth()).toLocalDate().atTime(LocalTime.MAX);
        
        // This year's date range
        LocalDateTime yearStart = now.withDayOfYear(1).toLocalDate().atStartOfDay();
        LocalDateTime yearEnd = now.withDayOfYear(now.toLocalDate().lengthOfYear()).toLocalDate().atTime(LocalTime.MAX);

        // Get counts
        Long totalProducts = productRepository.count();
        Long lowStockProducts = (long) productRepository.findLowStockProducts().size();
        Long totalCustomers = customerRepository.count();
        Long totalSuppliers = supplierRepository.count();

        // Sales stats
        BigDecimal todaySales = getSafeValue(saleRepository.getTotalSalesByDateRange(todayStart, todayEnd));
        Long todaySalesCount = saleRepository.getCountByDateRange(todayStart, todayEnd);
        BigDecimal monthSales = getSafeValue(saleRepository.getTotalSalesByDateRange(monthStart, monthEnd));
        BigDecimal yearSales = getSafeValue(saleRepository.getTotalSalesByDateRange(yearStart, yearEnd));

        // Purchase stats
        BigDecimal todayPurchases = getSafeValue(purchaseRepository.getTotalPurchasesByDateRange(todayStart, todayEnd));
        BigDecimal monthPurchases = getSafeValue(purchaseRepository.getTotalPurchasesByDateRange(monthStart, monthEnd));
        BigDecimal yearPurchases = getSafeValue(purchaseRepository.getTotalPurchasesByDateRange(yearStart, yearEnd));

        // Expense stats
        BigDecimal todayExpenses = getSafeValue(expenseRepository.getTotalExpensesByDateRange(todayStart, todayEnd));
        BigDecimal monthExpenses = getSafeValue(expenseRepository.getTotalExpensesByDateRange(monthStart, monthEnd));
        BigDecimal yearExpenses = getSafeValue(expenseRepository.getTotalExpensesByDateRange(yearStart, yearEnd));

        // Calculate profit (Sales - Purchases - Expenses)
        BigDecimal todayProfit = todaySales.subtract(todayPurchases).subtract(todayExpenses);
        BigDecimal monthProfit = monthSales.subtract(monthPurchases).subtract(monthExpenses);
        BigDecimal yearProfit = yearSales.subtract(yearPurchases).subtract(yearExpenses);

        return DashboardStats.builder()
                .totalProducts(totalProducts)
                .lowStockProducts(lowStockProducts)
                .totalCustomers(totalCustomers)
                .totalSuppliers(totalSuppliers)
                .todaySales(todaySales)
                .todaySalesCount(todaySalesCount)
                .monthSales(monthSales)
                .yearSales(yearSales)
                .todayPurchases(todayPurchases)
                .monthPurchases(monthPurchases)
                .yearPurchases(yearPurchases)
                .todayExpenses(todayExpenses)
                .monthExpenses(monthExpenses)
                .yearExpenses(yearExpenses)
                .todayProfit(todayProfit)
                .monthProfit(monthProfit)
                .yearProfit(yearProfit)
                .build();
    }

    private BigDecimal getSafeValue(BigDecimal value) {
        return value != null ? value : BigDecimal.ZERO;
    }
}
