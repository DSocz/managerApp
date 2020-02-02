package com.managerapp.Repositories;

import com.managerapp.Model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    @Query("SELECT p FROM Product p INNER JOIN FETCH p.brandid")
    List findAll();

    void deleteById(Long productId);

    Product save(Product product);
}
