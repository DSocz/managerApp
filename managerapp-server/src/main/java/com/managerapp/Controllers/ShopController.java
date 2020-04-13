package com.managerapp.Controllers;

import com.managerapp.Model.Shop;
import com.managerapp.Services.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/shop")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class ShopController {

    @Autowired
    private ShopService shopService;

    @GetMapping(path = "/getAllShops")
    List<Shop> getAllShops(){
        return shopService.getAllShops();
    }
}
