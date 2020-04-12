package com.managerapp.Model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "product_snap", schema = "managerapp")
public class ProductSnap implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "managerapp.product_snap_product_snap_id_seq")
    private Long productSnapId;

    @Column(name = "start_date", columnDefinition = "DATE")
    private LocalDate startDate;

    @Column(name = "end_date", columnDefinition = "DATE")
    private LocalDate endDate;

    @Column(name = "dop", columnDefinition = "DATE")
    private LocalDate dop;

    @Column(name = "usage_level", columnDefinition = "VARCHAR")
    private String usageLevel;

    @Column(name = "price", columnDefinition = "NUMERIC")
    private Double price;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "shop_id")
    private Shop shop;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;
}
