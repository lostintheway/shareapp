package com.lostintheway.shareapp.transactions.service;

import java.util.List;

import com.lostintheway.shareapp.transactions.entity.Transaction;

public interface TransactionService {

    Transaction save(Transaction transaction);

    List<Transaction> getAll();

    // List<Transaction> getByType(String type);
}
