package com.lostintheway.shareapp_spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lostintheway.shareapp_spring.entity.Investment;
import com.lostintheway.shareapp_spring.repository.InvestmentRepository;

@Service
public class InvestmentServiceImpl implements InvestmentService {

    @Autowired
    InvestmentRepository investmentRepo;

    @Override
    public Investment save(Investment investment) {
        return investmentRepo.save(investment);
    }

    @Override
    public List<Investment> getAll() {
        return investmentRepo.findAll();

    }

}
