package com.lostintheway.shareapp_spring.security;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.authorizeHttpRequests()
				.requestMatchers("/", "/login", "/oauth/**").permitAll()
				.anyRequest().authenticated()
				.and()
				.formLogin().permitAll()
				.loginPage("/login")
				.usernameParameter("email")
				.passwordParameter("pass")
				.defaultSuccessUrl("/list")
				.and()
				.oauth2Login()
				.loginPage("/login")
				.userInfoEndpoint()
				.userService(oauthUserService)
				.and()
				.successHandler(new AuthenticationSuccessHandler() {
					@Override
					public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
							Authentication authentication) throws IOException, ServletException {
						System.out.println("AuthenticationSuccessHandler invoked");
						System.out.println("Authentication name: " + authentication.getName());
						CustomOAuth2User oauthUser = (CustomOAuth2User) authentication.getPrincipal();

						userService.processOAuthPostLogin(oauthUser.getEmail());

						response.sendRedirect("/list");
					}
				})
				// .defaultSuccessUrl("/list")
				.and()
				.logout().logoutSuccessUrl("/").permitAll()
				.and()
				.exceptionHandling().accessDeniedPage("/403");
		;
		return http.build();
	}

	// @Bean
	// public UserDetailsService userDetailsService() {
	// UserDetails user = User.builder()
	// .username("user")
	// .password("password")
	// .roles("USER")
	// .build();
	// return new InMemoryUserDetailsManager(user);
	// }
	// // }

	@Bean
	public UserDetailsService userDetailsService() {
		return new UserDetailsServiceImpl();
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
		authProvider.setUserDetailsService(userDetailsService());
		authProvider.setPasswordEncoder(passwordEncoder());

		return authProvider;
	}

	// @Override
	// protected void configure(AuthenticationManagerBuilder auth) throws Exception
	// {
	// auth.authenticationProvider(authenticationProvider());
	// }

	// @Override
	// protected void configure(HttpSecurity http) throws Exception {
	// http.authorizeHttpRequests()
	// .requestMatchers("/", "/login", "/oauth/**").permitAll()
	// .anyRequest().authenticated()
	// .and()
	// .formLogin().permitAll()
	// .loginPage("/login")
	// .usernameParameter("email")
	// .passwordParameter("pass")
	// .defaultSuccessUrl("/list")
	// .and()
	// .oauth2Login()
	// .loginPage("/login")
	// .userInfoEndpoint()
	// .userService(oauthUserService)
	// .and()
	// .successHandler(new AuthenticationSuccessHandler() {

	// @Override
	// public void onAuthenticationSuccess(HttpServletRequest request,
	// HttpServletResponse response,
	// Authentication authentication) throws IOException, ServletException {
	// System.out.println("AuthenticationSuccessHandler invoked");
	// System.out.println("Authentication name: " + authentication.getName());
	// CustomOAuth2User oauthUser = (CustomOAuth2User)
	// authentication.getPrincipal();

	// userService.processOAuthPostLogin(oauthUser.getEmail());

	// response.sendRedirect("/list");
	// }
	// })
	// // .defaultSuccessUrl("/list")
	// .and()
	// .logout().logoutSuccessUrl("/").permitAll()
	// .and()
	// .exceptionHandling().accessDeniedPage("/403");
	// }

	@Autowired
	private CustomOAuth2UserService oauthUserService;

	@Autowired
	private UserService userService;
}
