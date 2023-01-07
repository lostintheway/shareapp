package com.lostintheway.shareapp_spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lostintheway.shareapp_spring.entity.Transaction;
import com.lostintheway.shareapp_spring.service.TransactionService;

@Controller
@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getAll() {
        return ResponseEntity.status(200).body(transactionService.getAll());
    }

    @PostMapping
    public ResponseEntity<Transaction> save(Transaction transaction) {
        return ResponseEntity.status(200).body(transactionService.save(transaction));
    }
}
