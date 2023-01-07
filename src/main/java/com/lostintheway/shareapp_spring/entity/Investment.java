package com.lostintheway.shareapp_spring.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Investment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int userId;
    private String name;
    private String relation;
    private Date date;
    private int amount;
    private String paymentMethod;
    private String remarks;

    @ManyToOne(targetEntity = Portfolio.class)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio_id;
}
