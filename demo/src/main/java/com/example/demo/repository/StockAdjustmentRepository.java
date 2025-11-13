package com.example.demo.repository;

import com.example.demo.entity.StockAdjustment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface StockAdjustmentRepository extends JpaRepository<StockAdjustment, Long> {
    
    Optional<StockAdjustment> findByReferenceNumber(String referenceNumber);
    
    List<StockAdjustment> findByLocation(String location);
    
    List<StockAdjustment> findByAdjustmentDateBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    @Query("SELECT sa FROM StockAdjustment sa WHERE sa.isActive = true ORDER BY sa.adjustmentDate DESC")
    List<StockAdjustment> findAllActive();
    
    @Query("SELECT COALESCE(MAX(CAST(SUBSTRING(sa.referenceNumber, 4) AS integer)), 0) FROM StockAdjustment sa WHERE sa.referenceNumber LIKE 'SA-%'")
    Integer findMaxReferenceNumber();
}
