package com.lostintheway.shareapp_spring.security;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.lostintheway.shareapp_spring.user.JwtUserDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final static String TOKEN_PREFIX = "Bearer ";

    private final JwtUserDetailsService jwtUserDetailsService;

    private final String secret;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager,
            JwtUserDetailsService jwtUseJwtUserDetailsService, String secret) {
        super(authenticationManager);
        this.jwtUserDetailsService = jwtUseJwtUserDetailsService;
        this.secret = secret;

    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws IOException, ServletException {
        UsernamePasswordAuthenticationToken auth = getAuthentication(request);
        if (auth == null) {
            filterChain.doFilter(request, response);
            return;
        }
        SecurityContextHolder.getContext().setAuthentication(auth);
        filterChain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (token == null || !token.startsWith(TOKEN_PREFIX)) {
            return null;
        }
        String email = JWT.require(Algorithm.HMAC256(secret)).build().verify(token.replace(TOKEN_PREFIX, ""))
                .getSubject();
        if (email == null)
            return null;
        UserDetails userDetails = jwtUserDetailsService.loadUserByUsername(email);
        return new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getAuthorities());
    }

}
