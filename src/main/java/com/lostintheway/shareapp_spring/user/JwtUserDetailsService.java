package com.lostintheway.shareapp_spring.user;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class JwtUserDetailsService implements UserDetailsService {

    private JwtUserService jwtUserService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        JwtUser user = jwtUserService.getJwtUserByEmail(email);

        return new User(user.getUsername(), user.getPassword(), user.isEnabled(), true, true, true,
                user.getAuthorities());
    }

}
