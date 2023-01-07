package com.lostintheway.shareapp_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lostintheway.shareapp_spring.entity.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
