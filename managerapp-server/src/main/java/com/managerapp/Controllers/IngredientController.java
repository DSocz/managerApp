package com.managerapp.Controllers;

import com.managerapp.Model.DTO.CosmeticCompositionDTO;
import com.managerapp.Model.Ingredient;
import com.managerapp.Services.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredient")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class IngredientController {

    @Autowired
    IngredientService ingredientService;

    @PostMapping(path = "/addIngredient")
    public void addIngredient(@RequestBody CosmeticCompositionDTO cC){
        ingredientService.createUpdateWildcardInci(cC);
    }

    @GetMapping(path = "/checkCosmeticComposition")
    public List<Ingredient> checkCosmeticComposition(@RequestBody CosmeticCompositionDTO cC){
        return ingredientService.checkCosmeticComposition(cC);
    }

}
