package com.lostintheway.shareapp.portfolios.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lostintheway.shareapp.portfolios.entity.Portfolio;
import com.lostintheway.shareapp.portfolios.repository.PortfolioRepository;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    PortfolioRepository portfolioRepository;

    @Override
    public Portfolio save(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    @Override
    public List<Portfolio> getAll() {
        return portfolioRepository.findAll();
    }

}
