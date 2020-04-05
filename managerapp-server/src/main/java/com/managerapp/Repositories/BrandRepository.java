package com.managerapp.Repositories;

import com.managerapp.Model.Brand;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BrandRepository extends CrudRepository<Brand, Long> {

    List<Brand> findAll();
}
