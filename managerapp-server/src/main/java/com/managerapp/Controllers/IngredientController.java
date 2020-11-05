package com.managerapp.Controllers;

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

    //not finished - INCI from webside
    @PostMapping(path = "/addIngredient")
    public void addIngredient(@RequestBody String cosmeticComposition){

      //  String inci = "Aqua,Glycerin,Cannabis Sativa Seed Oil,Butyrospermum Parkii Butter, Caprylic/Capric Triglyceride,Prunus Amygdalus Dulcis Oil,Cetearyl Olivate,Sorbitan Olivate,Coco-Caprylate/Caprate,Isopropyl Myristate,Leontopodium Alpinum Callus Culture Extract,Sodium Hyaluronate,Ginkgo Biloba Leaf Extract,Tocopherol,Ascorbyl Palmitate,Glyceryl Stearate,Glyceryl Oleate,Xanthan Gum,Lecithin,Citric Acid,Cetearyl Alcohol,Gluconolactone,Calcium Gluconate,Benzyl Alcohol,Dehydroacetic Acid,Sodium Benzoate,Potassium Sorbate,Parfum";
       // String inci = "Aqua, Propanediol, Glycerin, Niacinamide, Carrageenan, Biosaccharide Gum-1, Sodium Ascorbyl Phosphate, Citrus Grandis Fruit Extract, Sorbitol, Xanthan Gum, Caprylyl/Capryl Glucoside, Caprylyl Glycol, Tetrasodium Glutamate Diacetate, Lecithin, Citric Acid, Disodium EDTA, Glyceryl Caprylate, Phenoxyethanol, Potassium Sorbate, Sodium Benzoate, Parfum, Hexyl Cinnamal, Linalool, Limonene, Benzyl Salicylate, Citronellol";

        ingredientService.createUpdateWildcardInci(cosmeticComposition, true, ",");

    }


    //not finished - INCI from webside
    @GetMapping
    public List<String> checkCosmeticComposition(){

        return null;
    }

}
