package com.managerapp.Services;

import com.managerapp.Model.Product;

import java.util.List;

public interface ProductService {

    List findAll();

    void deleteOne(Long productId);

    Product save(Product product);
}
