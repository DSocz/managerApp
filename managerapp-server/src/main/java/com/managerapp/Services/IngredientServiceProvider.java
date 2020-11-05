package com.managerapp.Services;

import com.managerapp.Model.Ingredient;
import com.managerapp.Repositories.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class IngredientServiceProvider implements IngredientService {

    @Autowired
    IngredientRepository ingredientRepository;
    
    @Override
    public void createUpdateWildcardInci(String rawInciList, boolean wildcard, String separator) {

        List<Ingredient> inciList = Stream.of(rawInciList.split(separator))
                .map(inci -> new Ingredient(inci.toLowerCase().trim(), wildcard))
                .collect(Collectors.toList());

        List<Ingredient> allDefinedIngredients = ingredientRepository.findAll();

        inciList.forEach(inci -> setInciId(inci, allDefinedIngredients));
        inciList.forEach(inci -> ingredientRepository.save(inci));
    }

    private void setInciId(Ingredient inci, List<Ingredient> allDefinedIngredients) {

        Optional<Ingredient> existingIngredient = allDefinedIngredients.stream()
                .filter(i -> i.getIngredientName().equalsIgnoreCase(inci.getIngredientName()))
                .findFirst();

        if(existingIngredient.isPresent()){
            inci.setIngredientId(existingIngredient.get().getIngredientId());
            inci.setTags(existingIngredient.get().getTags());
        }
    }
}
