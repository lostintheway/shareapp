package com.lostintheway.shareapp_spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lostintheway.shareapp_spring.entity.Portfolio;
import com.lostintheway.shareapp_spring.repository.PortfolioRepository;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    PortfolioRepository portfolioRepo;

    @Override
    public Portfolio save(Portfolio portfolio) {
        return portfolioRepo.save(portfolio);
    }

    @Override
    public List<Portfolio> getAll() {
        return portfolioRepo.findAll();
    }

}
