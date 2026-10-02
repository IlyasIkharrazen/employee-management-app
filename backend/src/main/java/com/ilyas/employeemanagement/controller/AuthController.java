package com.ilyas.employeemanagement.controller;

import com.ilyas.employeemanagement.dto.auth.LoginRequest;
import com.ilyas.employeemanagement.dto.auth.RegisterRequest;
import com.ilyas.employeemanagement.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService){
        this.authService = authService;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest){
        authService.login(loginRequest);

        return ResponseEntity.ok("Login successful");
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest){
         authService.register(registerRequest);

        return ResponseEntity.ok("Register successful");
    }

    @GetMapping("/csrf")
    public CsrfToken csrf(CsrfToken csrfToken){
        return csrfToken;

    }
}
