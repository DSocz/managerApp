package com.managerapp.Repositories;

import com.managerapp.Model.Shop;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ShopRepository extends CrudRepository<Shop, Long> {

    @Query("SELECT shop FROM Shop shop")
    List<Shop> getAll();

}
