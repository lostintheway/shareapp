package com.lostintheway.shareapp_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp_spring.entity.Investment;

public interface InvestmentRepository extends JpaRepository<Investment, Integer> {

}
