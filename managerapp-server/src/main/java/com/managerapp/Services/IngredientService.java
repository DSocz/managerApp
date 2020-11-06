package com.managerapp.Services;

import com.managerapp.Model.DTO.CosmeticCompositionDTO;
import com.managerapp.Model.Ingredient;

import java.util.List;

public interface IngredientService {

    void createUpdateWildcardInci(CosmeticCompositionDTO cC);

    List<Ingredient> checkCosmeticComposition(CosmeticCompositionDTO cC);
}
