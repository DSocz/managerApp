package com.managerapp.Controllers;

import com.managerapp.Services.ProductService;
import com.managerapp.Services.ProductServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/products")
    public List findAll() {
        return productService.findAll();
    }

}
