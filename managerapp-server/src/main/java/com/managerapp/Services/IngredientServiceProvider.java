package com.managerapp.Services;

import com.managerapp.Model.DTO.CosmeticCompositionDTO;
import com.managerapp.Model.Ingredient;
import com.managerapp.Model.Tag;
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
    public void createUpdateWildcardInci(CosmeticCompositionDTO cC) {

        List<Ingredient> inciList = getIngredientsFromCosmeticComposition(cC);

        List<Ingredient> allDefinedIngredients = ingredientRepository.findAll();

        inciList.forEach(inci -> setInciId(inci, allDefinedIngredients));
        inciList.forEach(inci -> ingredientRepository.save(inci));
    }

    @Override
    public List<Ingredient> checkCosmeticComposition(CosmeticCompositionDTO cC) {

        List<Ingredient> cosmeticCompositionInciList = getIngredientsFromCosmeticComposition(cC);

        List<Ingredient> ingredientList = ingredientRepository
                .fingByIngredientName(cosmeticCompositionInciList.stream().map(Ingredient::getIngredientName).collect(Collectors.toList()));

        for (Ingredient ingredient: ingredientList) {
            if(ingredient.getTags().stream().map(Tag::getRate).collect(Collectors.toList())
                    .stream().allMatch(r -> r.equals(Tag.GREEN_TAG)) || ingredient.getWildcard()){
                ingredient.setRate(Ingredient.GREEN_INGREDIENT);
            } else if(ingredient.getTags().stream().map(Tag::getRate).collect(Collectors.toList())
                    .stream().allMatch(r -> r.equals(Tag.RED_TAG))) {
                ingredient.setRate(Ingredient.RED_INGREDIENT);
            } else {
                ingredient.setRate(Ingredient.YELLOW_INGREDIENT);
            }
        }

        return ingredientList;
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

    private List<Ingredient> getIngredientsFromCosmeticComposition(CosmeticCompositionDTO cC) {
        return Stream.of(cC.getCosmeticComposition().split(cC.getSeparator()))
                .map(inci -> new Ingredient(inci.toLowerCase().trim(), cC.isWildcard()))
                .collect(Collectors.toList());
    }
}
