package com.lostintheway.shareapp_spring.service;

import java.util.List;

import com.lostintheway.shareapp_spring.entity.Investment;

public interface InvestmentService {
    public Investment save(Investment investment);

    public List<Investment> getAll();
}
