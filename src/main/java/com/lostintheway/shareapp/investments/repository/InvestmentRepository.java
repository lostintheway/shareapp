package com.lostintheway.shareapp.investments.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp.investments.entity.Investment;

public interface InvestmentRepository extends JpaRepository<Investment, Integer> {

}
