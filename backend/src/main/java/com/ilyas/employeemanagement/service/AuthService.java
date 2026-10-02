package com.ilyas.employeemanagement.service;

import com.ilyas.employeemanagement.dto.auth.LoginRequest;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private AuthenticationManager authenticationManager;

    AuthService(AuthenticationManager authenticationManager){
       this.authenticationManager = authenticationManager;
    }

    public Authentication login(LoginRequest loginRequest){
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        return authenticationManager.authenticate(token);
    }


}
