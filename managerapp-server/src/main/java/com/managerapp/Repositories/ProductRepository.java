package com.managerapp.Repositories;

import com.managerapp.Model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ProductRepository extends Repository<Product, Long> {

    @Query("SELECT p FROM Product p INNER JOIN FETCH p.brandid")
    List findAll();

    void deleteById(Long productId);
}
