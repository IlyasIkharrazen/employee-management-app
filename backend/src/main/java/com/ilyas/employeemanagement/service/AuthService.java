package com.ilyas.employeemanagement.service;

import com.ilyas.employeemanagement.dto.auth.LoginRequest;
import com.ilyas.employeemanagement.dto.auth.RegisterRequest;
import com.ilyas.employeemanagement.entity.User;
import com.ilyas.employeemanagement.enums.Role;
import com.ilyas.employeemanagement.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder){
       this.authenticationManager = authenticationManager;
       this.userRepository = userRepository;
       this.passwordEncoder = passwordEncoder;
    }

    public Authentication login(LoginRequest loginRequest){
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        return authenticationManager.authenticate(token);
    }

    public void register(RegisterRequest registerRequest){

        User user = new User();
        String email = registerRequest.getEmail().trim().toLowerCase();
        if(userRepository.findByEmail(email).isPresent()){
            throw new RuntimeException("Email déjà existant");
        }
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
    }

}
