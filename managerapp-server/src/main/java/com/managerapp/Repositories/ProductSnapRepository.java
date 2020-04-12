package com.managerapp.Repositories;

import com.managerapp.Model.ProductSnap;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductSnapRepository extends CrudRepository<ProductSnap, Long> {

    @Query("SELECT ps FROM ProductSnap ps " +
            "INNER JOIN FETCH ps.product product " +
            "INNER JOIN FETCH product.brand " +
            "WHERE ps.startDate IS NOT NULL")
    List<ProductSnap> findAllInUse();

    @Query("SELECT ps FROM ProductSnap ps " +
            "INNER JOIN FETCH ps.product product " +
            "INNER JOIN FETCH product.brand " +
            "WHERE ps.startDate IS NULL")
    List<ProductSnap> findAllNotInUse();
}
