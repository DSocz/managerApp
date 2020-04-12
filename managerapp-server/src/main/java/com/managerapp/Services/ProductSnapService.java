package com.managerapp.Services;

import com.managerapp.Model.ProductSnap;

import java.util.List;

public interface ProductSnapService {

    List<ProductSnap> getAllInUseProductSnaps();

    List<ProductSnap> getAllNotInUseProductSnaps();
}
