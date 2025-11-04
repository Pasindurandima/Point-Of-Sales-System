package com.example.demo.service;

import com.example.demo.dto.BrandRequest;
import com.example.demo.dto.BrandResponse;
import com.example.demo.entity.Brand;
import com.example.demo.exception.BadRequestException;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.BrandRepository;
import com.example.demo.util.DtoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BrandService {

    private final BrandRepository brandRepository;
    private final DtoMapper dtoMapper;

    @Transactional
    public BrandResponse createBrand(BrandRequest request) {
        if (brandRepository.existsByName(request.getName())) {
            throw new BadRequestException("Brand with name " + request.getName() + " already exists");
        }

        Brand brand = Brand.builder()
                .name(request.getName())
                .description(request.getDescription())
                .build();

        Brand savedBrand = brandRepository.save(brand);
        return dtoMapper.toBrandResponse(savedBrand);
    }

    @Transactional
    public BrandResponse updateBrand(Long id, BrandRequest request) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found with id: " + id));

        if (!brand.getName().equals(request.getName()) && brandRepository.existsByName(request.getName())) {
            throw new BadRequestException("Brand with name " + request.getName() + " already exists");
        }

        brand.setName(request.getName());
        brand.setDescription(request.getDescription());

        Brand updatedBrand = brandRepository.save(brand);
        return dtoMapper.toBrandResponse(updatedBrand);
    }

    public BrandResponse getBrand(Long id) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found with id: " + id));
        return dtoMapper.toBrandResponse(brand);
    }

    public List<BrandResponse> getAllBrands() {
        return brandRepository.findAll().stream()
                .map(dtoMapper::toBrandResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteBrand(Long id) {
        Brand brand = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Brand not found with id: " + id));
        brand.setIsActive(false);
        brandRepository.save(brand);
    }
}
