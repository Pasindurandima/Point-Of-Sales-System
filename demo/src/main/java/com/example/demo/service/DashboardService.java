package com.example.demo.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.dto.DashboardStats;
import com.example.demo.dto.EssentialsActivity;
import com.example.demo.dto.EssentialsOverview;
import com.example.demo.entity.Product;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.ExpenseRepository;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.PurchaseRepository;
import com.example.demo.repository.SaleRepository;
import com.example.demo.repository.StockAdjustmentRepository;
import com.example.demo.repository.SupplierRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final ProductRepository productRepository;
    private final CustomerRepository customerRepository;
    private final SupplierRepository supplierRepository;
    private final SaleRepository saleRepository;
    private final PurchaseRepository purchaseRepository;
    private final ExpenseRepository expenseRepository;
    private final StockAdjustmentRepository stockAdjustmentRepository;

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

            public EssentialsOverview getEssentialsOverview() {
            LocalDateTime todayStart = LocalDateTime.now().toLocalDate().atStartOfDay();
            LocalDateTime todayEnd = LocalDateTime.now().toLocalDate().atTime(LocalTime.MAX);
            List<Product> lowStockProducts = productRepository.findLowStockProducts();
            BigDecimal todaySales = getSafeValue(saleRepository.getTotalSalesByDateRange(todayStart, todayEnd));

            List<EssentialsActivity> activities = new ArrayList<>();
            saleRepository.findAllOrderByDateDesc().stream().limit(10).forEach(sale -> activities.add(new EssentialsActivity(
                "sale", "Sale completed", sale.getInvoiceNumber(), sale.getSaleDate(), sale.getTotal())));
            productRepository.findAllActiveProducts().stream().limit(10).forEach(product -> activities.add(new EssentialsActivity(
                "product", "Product added", product.getName() + " - SKU: " + product.getSku(), product.getCreatedAt(), null)));
            expenseRepository.findAllOrderByDateDesc().stream().limit(10).forEach(expense -> activities.add(new EssentialsActivity(
                "expense", "Expense recorded", expense.getTitle(), expense.getExpenseDate(), expense.getAmount())));
            stockAdjustmentRepository.findAll().stream().limit(10).forEach(adjustment -> activities.add(new EssentialsActivity(
                "stock", "Stock adjusted", adjustment.getTotalQuantity() + " items updated", adjustment.getAdjustmentDate(), adjustment.getTotalAmount())));

            return EssentialsOverview.builder()
                .totalProducts(productRepository.count())
                .totalCustomers(customerRepository.count())
                .lowStockCount(lowStockProducts.size())
                .todaySalesCount(saleRepository.getCountByDateRange(todayStart, todayEnd))
                .todaySales(todaySales)
                .lowStockProducts(lowStockProducts.stream().map(Product::getName).collect(Collectors.toList()))
                .recentActivities(activities.stream()
                    .filter(activity -> activity.getDate() != null)
                    .sorted(Comparator.comparing(EssentialsActivity::getDate).reversed())
                    .limit(8)
                    .collect(Collectors.toList()))
                .build();
            }

    private BigDecimal getSafeValue(BigDecimal value) {
        return value != null ? value : BigDecimal.ZERO;
    }
}
