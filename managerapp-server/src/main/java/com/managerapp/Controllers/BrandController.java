package com.managerapp.Controllers;

import com.managerapp.Services.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brand")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping(path = "/getAllBrands")
    public List findAllBrands(){
        return brandService.findAllBrands();
    }
}
