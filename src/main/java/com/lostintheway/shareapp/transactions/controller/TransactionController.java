package com.lostintheway.shareapp.transactions.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lostintheway.shareapp.transactions.entity.Transaction;
import com.lostintheway.shareapp.transactions.service.TransactionService;

@Controller
@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @GetMapping
    public ResponseEntity<List<Transaction>> getAll() {
        return ResponseEntity.status(200).body(transactionService.getAll());
    }

    @PostMapping
    public ResponseEntity<Transaction> post(Transaction transaction) {
        return ResponseEntity.status(200).body(transactionService.save(transaction));
    }

}
