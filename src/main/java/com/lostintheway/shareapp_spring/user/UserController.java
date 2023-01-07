package com.lostintheway.shareapp_spring.user;

import java.util.Set;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class UserController {

    private JwtUserService jwtUserService;

    @PostMapping("/signup")
    public void signup(JwtUser jwtUser) {
        jwtUserService.saveUser(jwtUser);
    }
    // JwtUser myuser = JwtUser.builder()
    // .username(jwtUserDto.getUsername())
    // .email(jwtUserDto.getEmail())
    // .password((jwtUserDto.getPassword()))
    // .role(Set.of(Role.ROLE_USER))
    // .build();
    // jwtUserService.saveUser(myuser);
    // }

}
