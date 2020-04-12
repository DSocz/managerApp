package com.managerapp.Services;

import com.managerapp.Model.ProductSnap;
import com.managerapp.Repositories.ProductSnapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductSnapServiceProvider implements ProductSnapService {

    @Autowired
    private ProductSnapRepository productSnapRepository;

    @Override
    public List<ProductSnap> getAllInUseProductSnaps() {
        return productSnapRepository.findAllInUse();
    }

    @Override
    public List<ProductSnap> getAllNotInUseProductSnaps() {
        return productSnapRepository.findAllNotInUse();
    }
}
