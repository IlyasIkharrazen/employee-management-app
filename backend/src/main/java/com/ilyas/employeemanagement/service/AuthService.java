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

    public User register(RegisterRequest registerRequest){

        User user = new User();
        if(userRepository.findByEmail(registerRequest.getEmail()) != null){
            throw new RuntimeException("erreur email deja existant");
        }
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(Role.USER);
        return userRepository.save(user);
    }

}
