package com.managerapp.Services;

import com.managerapp.Model.Brand;
import com.managerapp.Repositories.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandServiceProvider implements BrandService {

    @Autowired
    private BrandRepository brandRepository;

    @Override
    public List<Brand> findAllBrands() {
        return brandRepository.findAll();
    }
}
