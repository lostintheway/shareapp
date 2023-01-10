package com.lostintheway.shareapp_spring.entity;

import java.util.Date;

import com.lostintheway.shareapp_spring.entity.enums.ShareType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String shareName;
    private Date date;
    private int quantity;
    private int price;
    private String transType;
    private int userId; // no relation

    @Enumerated(EnumType.STRING)
    private ShareType shareType; // no relation

    @ManyToOne(targetEntity = Portfolio.class)
    @JoinColumn(name = "portfolio_id")
    private Portfolio portfolio_id;

}
