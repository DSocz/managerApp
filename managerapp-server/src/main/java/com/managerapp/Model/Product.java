package com.managerapp.Model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
@Entity
@Table(name = "product", schema = "managerapp")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "product_id_product_seq")
    private Long idProduct;
    private String name;
    private String inci;
    private Boolean eco;
    private Boolean crueltyFree;
}
