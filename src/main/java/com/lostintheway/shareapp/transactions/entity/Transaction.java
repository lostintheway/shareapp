package com.lostintheway.shareapp.transactions.entity;

import com.lostintheway.shareapp.portfolios.entity.Portfolio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int shareName;
    private int date;
    private int quantity;
    private int price;
    private int transType;
    private int userId; // no relation

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Portfolio portfolioId;

    public Transaction(int id, int shareName, int date, int quantity, int price, int transType, int userId) {
        this.id = id;
        this.shareName = shareName;
        this.date = date;
        this.quantity = quantity;
        this.price = price;
        this.transType = transType;
        this.userId = userId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getShareName() {
        return shareName;
    }

    public void setShareName(int shareName) {
        this.shareName = shareName;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getTransType() {
        return transType;
    }

    public void setTransType(int transType) {
        this.transType = transType;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

}
