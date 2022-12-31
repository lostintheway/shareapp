package com.lostintheway.shareapp.investments.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lostintheway.shareapp.investments.entity.Investment;
import com.lostintheway.shareapp.investments.repository.InvestmentRepository;

@Service
public class InvestmentServiceImpl implements InvestmentService {

    @Autowired
    private InvestmentRepository investmentRepository;

    @Override
    public Investment save(Investment category) {
        return investmentRepository.save(category);
    }

    @Override
    public List<Investment> getAll() {
        return investmentRepository.findAll();
    }

}