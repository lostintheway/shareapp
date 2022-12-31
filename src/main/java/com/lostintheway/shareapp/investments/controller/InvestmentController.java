package com.lostintheway.shareapp.investments.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lostintheway.shareapp.investments.entity.Investment;
import com.lostintheway.shareapp.investments.service.InvestmentService;

@Controller
@RestController
@RequestMapping("/investment")
public class InvestmentController {

    @Autowired
    private InvestmentService investmentService;

    @GetMapping
    public ResponseEntity<List<Investment>> getAll() {
        return ResponseEntity.status(200).body(investmentService.getAll());
    }

    @PostMapping
    public ResponseEntity<Investment> post(Investment investment) {
        return ResponseEntity.status(200).body(investmentService.save(investment));
    }

    // @GetMapping("/admin")
    // public ResponseEntity<Page<Product>> getAllInPageRoute(@RequestParam("page")
    // int page,
    // @RequestParam("size") int size) {
    // return ResponseEntity.status(200).body(productService.getAllInPage(page,
    // size));
    // }

    // @GetMapping
    // public ResponseEntity<Page<Product>> getPubInPageRout(@RequestParam("page")
    // int page,
    // @RequestParam("size") int size) {
    // return
    // ResponseEntity.status(200).body(productService.getPubInPage("published",
    // page, size));
    // }

    // @PostMapping
    // public ResponseEntity<Product> addProductRoute(@RequestBody Product product)
    // {
    // return ResponseEntity.status(200).body(productService.save(product));
    // }

    // @GetMapping("/one")
    // public ResponseEntity<Optional<Product>>
    // getProductByIdRoute(@RequestParam("id") int id) {
    // return ResponseEntity.status(200).body(productService.getProductById(id));
    // }

}
