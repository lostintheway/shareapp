package com.lostintheway.shareapp.transactions.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp.transactions.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
