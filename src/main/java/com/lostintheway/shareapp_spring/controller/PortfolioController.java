package com.lostintheway.shareapp_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lostintheway.shareapp_spring.entity.Portfolio;
import com.lostintheway.shareapp_spring.service.PortfolioService;

@Controller
@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/all")
    public ResponseEntity<List<Portfolio>> getAll() {
        return ResponseEntity.status(200).body(portfolioService.getAll());
    }

    @PostMapping
    public ResponseEntity<Portfolio> post(Portfolio portfolio) {
        return ResponseEntity.status(200).body(portfolioService.save(portfolio));
    }
}
