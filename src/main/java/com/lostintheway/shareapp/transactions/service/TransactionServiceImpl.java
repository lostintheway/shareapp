package com.lostintheway.shareapp.transactions.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lostintheway.shareapp.transactions.entity.Transaction;
import com.lostintheway.shareapp.transactions.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    TransactionRepository transactionRepository;

    // @Override
    // public List<Transaction> getByType(String type) {
    // return transactionRepository.findByType(type);
    // }

    @Override
    public Transaction save(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public List<Transaction> getAll() {
        return transactionRepository.findAll();
    }

}
