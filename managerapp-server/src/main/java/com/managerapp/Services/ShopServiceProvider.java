package com.managerapp.Services;

import com.managerapp.Model.Shop;
import com.managerapp.Repositories.ShopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShopServiceProvider implements ShopService {

    @Autowired
    private ShopRepository shopRepository;

    public List<Shop> getAllShops(){
     return   shopRepository.getAll();
    }
}
