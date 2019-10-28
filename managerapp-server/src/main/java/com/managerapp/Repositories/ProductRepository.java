package com.managerapp.Repositories;

import com.managerapp.Model.Product;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProductRepository extends Repository<Product, Long> {

    List findAll();
}
