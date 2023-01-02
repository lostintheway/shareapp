package com.lostintheway.shareapp.portfolios.entity;

import java.sql.Date;

import com.lostintheway.shareapp.investments.entity.Investment;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String adminName;
    private Date date;
    @ManyToOne
    @JoinColumn(name = "investment_id")
    private Investment investment;

    public Portfolio(int id, String name, String adminName, Date date) {
        this.id = id;
        this.name = name;
        this.adminName = adminName;
        this.date = date;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

}
