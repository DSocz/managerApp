package com.managerapp.Controllers;

import com.managerapp.Model.Product;
import com.managerapp.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping(path = "/deleteOne/{productID}")
    public void deleteOne(@PathVariable Long productID) {
        productService.deleteOne(productID);
    }

    @PostMapping(path = "/addNewProduct")
    public Product addNewProduct(@RequestBody Product newProduct){
        return productService.save(newProduct);
    }

}
