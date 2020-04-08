package com.managerapp.Model;

import lombok.*;
import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
@Entity
@Table(name = "brand", schema = "managerapp")
public class Brand implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.brand_brandid_seq")
    private Long brandId;
    private String brandName;
    private Boolean crueltyFree;

}
