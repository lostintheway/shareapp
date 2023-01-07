package com.lostintheway.shareapp_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp_spring.entity.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {

}
