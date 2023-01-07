package com.lostintheway.shareapp_spring.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JwtUserRepository extends JpaRepository<JwtUser, Long> {

    Optional<JwtUser> findJwtUserByUsername(String username);

    Optional<JwtUser> findJwtUserByEmail(String username);

}
