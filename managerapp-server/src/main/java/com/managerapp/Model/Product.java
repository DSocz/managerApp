package com.managerapp.Model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "product", schema = "managerapp")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_id_product_seq")
    private Long productId;
    private String name;
    private String inci;
    private Boolean goodComposition;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_brandid")
    private Brand brandid;
}
