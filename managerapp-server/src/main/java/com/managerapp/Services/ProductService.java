package com.managerapp.Services;

import java.util.List;

public interface ProductService {

    List findAll();

    void deleteOne(Long productId);
}
