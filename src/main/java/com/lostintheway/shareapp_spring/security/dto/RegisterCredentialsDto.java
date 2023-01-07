package com.lostintheway.shareapp_spring.security.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@AllArgsConstructor
@Value
@Builder
public class RegisterCredentialsDto {

    String username;
    String email;
    String password;

}
