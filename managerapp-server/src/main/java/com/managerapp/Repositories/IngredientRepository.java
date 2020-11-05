package com.managerapp.Repositories;

import com.managerapp.Model.Ingredient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

    List<Ingredient> findAll();

    Ingredient save(Ingredient ingredient);
}
