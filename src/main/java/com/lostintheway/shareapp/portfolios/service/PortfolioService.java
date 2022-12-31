package com.lostintheway.shareapp.portfolios.service;

import java.util.List;

import com.lostintheway.shareapp.portfolios.entity.Portfolio;

public interface PortfolioService {
    Portfolio save(Portfolio portfolio);

    List<Portfolio> getAll();

}
