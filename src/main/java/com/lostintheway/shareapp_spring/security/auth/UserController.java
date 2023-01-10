package com.lostintheway.shareapp_spring.security.auth;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping
public class UserController {

    private final AuthService service;

    @PostMapping("/register")
    public ResponseEntity<LoginResponse> register(
            @RequestBody RegisterBody request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<LoginResponse> authenticate(
            @RequestBody LoginBody request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

}
