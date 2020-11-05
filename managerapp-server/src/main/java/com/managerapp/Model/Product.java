package com.managerapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "product", schema = "managerapp")
public class Product implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.product_id_product_seq")
    private Long productId;
    @Column(unique = true)
    private String name;
    private String inci;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_brandid")
    private Brand brand;
}
