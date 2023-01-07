package com.lostintheway.shareapp_spring.service;

import java.util.List;

import com.lostintheway.shareapp_spring.entity.Portfolio;

public interface PortfolioService {

    public Portfolio save(Portfolio portfolio);

    public List<Portfolio> getAll();
}
