package com.managerapp.Repositories;

import com.managerapp.Model.Ingredient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

    List<Ingredient> findAll();

    Ingredient save(Ingredient ingredient);

    @Query("SELECT i FROM Ingredient i INNER JOIN FETCH i.tags where i.ingredientName IN (:ingredientName)")
    List<Ingredient> fingByIngredientName(@Param("ingredientName")List<String> ingredientName);
}
