package com.ilyas.employeemanagement.service;

import com.ilyas.employeemanagement.dto.auth.LoginRequest;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private String email;
    private String password;
    private AuthenticationManager authenticationManager;

    AuthService(LoginRequest loginRequestDTO){
        this.email = loginRequestDTO.getEmail();
        this.password = loginRequestDTO.getPassword();
    }

    UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
            email,
            password
    );

    Authentication authentication = authenticationManager.authenticate(token);
}
