package com.lostintheway.shareapp.investments.entity;

import java.sql.Date;
import com.lostintheway.shareapp.portfolios.entity.Portfolio;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

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

    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Portfolio portfolio;

    public Investment(int id, int userId, String name, String relation, Date date, int amount,
            String paymentMethod, String remarks) {
        this.id = id;
        this.userId = userId;
        this.name = name;
        this.relation = relation;
        this.date = date;
        this.amount = amount;
        this.paymentMethod = paymentMethod;
        this.remarks = remarks;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelation() {
        return relation;
    }

    public void setRelation(String relation) {
        this.relation = relation;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    // @ManyToMany
    // @JoinTable(name = "product_category", joinColumns = { @JoinColumn(name =
    // "product_id") }, inverseJoinColumns = {
    // @JoinColumn(name = "category_id") })
    // private Set<Product> products;

}
