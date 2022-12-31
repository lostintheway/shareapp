package com.lostintheway.shareapp.portfolios.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp.portfolios.entity.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {

}
