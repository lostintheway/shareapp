package com.lostintheway.shareapp_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lostintheway.shareapp_spring.entity.Investment;
import com.lostintheway.shareapp_spring.service.InvestmentService;

@Controller
@RestController
@RequestMapping
public class InvestmentController {

    @Autowired
    InvestmentService investmentService;

    @GetMapping("/investment")
    public ResponseEntity<List<Investment>> getAll() {
        return ResponseEntity.status(200).body(investmentService.getAll());
    }

    @PostMapping
    public ResponseEntity<Investment> save(Investment investment) {
        return ResponseEntity.status(200).body(investmentService.save(investment));
    }
}
