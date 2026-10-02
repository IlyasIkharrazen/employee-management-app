package com.ilyas.employeemanagement.controller;

import com.ilyas.employeemanagement.dto.auth.LoginRequest;
import com.ilyas.employeemanagement.dto.auth.RegisterRequest;
import com.ilyas.employeemanagement.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;
    private final SecurityContextRepository securityContextRepository = new HttpSessionSecurityContextRepository();

    public AuthController(AuthService authService){
        this.authService = authService;
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request, HttpServletResponse response){
       Authentication authentication = authService.login(loginRequest);

        SecurityContext context = SecurityContextHolder.createEmptyContext();
        context.setAuthentication(authentication);

        SecurityContextHolder.setContext(context);

        securityContextRepository.saveContext(context, request, response);

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
