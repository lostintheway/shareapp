package com.lostintheway.shareapp.investments.service;

import java.util.List;

import com.lostintheway.shareapp.investments.entity.Investment;

public interface InvestmentService {

    Investment save(Investment investment);

    List<Investment> getAll();

}