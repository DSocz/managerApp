package com.managerapp.Services;

import com.managerapp.Model.Product;
import com.managerapp.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceProvider implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List findAll() {
        return productRepository.findAll();
    }

    @Override
    public void deleteOne(Long productId) {
        productRepository.deleteById(productId);
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

}
