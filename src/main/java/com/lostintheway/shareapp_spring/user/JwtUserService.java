package com.lostintheway.shareapp_spring.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.persistence.EntityNotFoundException;

@Service
public class JwtUserService {

    @Autowired
    private JwtUserRepository jwtUserRepository;

    public JwtUser saveUser(JwtUser jwtUser) {
        return jwtUserRepository.save(jwtUser);
    }

    public Optional<JwtUser> findJwtUserByEmail(String email) {
        return jwtUserRepository.findJwtUserByEmail(email);
    }

    public JwtUser getJwtUserByEmail(String email) {
        return jwtUserRepository.findJwtUserByEmail(email)
                .orElseThrow(() -> new EntityNotFoundException("User not found by email!"));
    }

    public JwtUser getJwtUserByUsername(String username) {
        return jwtUserRepository.findJwtUserByUsername(username)
                .orElseThrow(() -> new EntityNotFoundException("User not found by username!"));
    }
}
