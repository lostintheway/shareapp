package com.lostintheway.shareapp_spring.service;

import java.util.List;

import com.lostintheway.shareapp_spring.entity.Transaction;

public interface TransactionService {
    public Transaction save(Transaction transaction);

    public List<Transaction> getAll();
}
