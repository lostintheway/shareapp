package com.lostintheway.shareapp_spring.entity;

import java.util.Date;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String adminName;
    private Date date;

    @OneToMany(mappedBy = "portfolio_id")
    private Set<Investment> investment;

    @OneToMany(mappedBy = "portfolio_id", fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = Transaction.class)
    private Set<Transaction> transaction;

}
