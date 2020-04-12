package com.managerapp.Model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "shop", schema = "managerapp")
public class Shop implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.shop_shop_id_seq")
    private Long shopId;
    private String name;
    private String url;
}
