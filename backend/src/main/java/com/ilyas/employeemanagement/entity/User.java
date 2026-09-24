package com.ilyas.employeemanagement.entity;

import com.ilyas.employeemanagement.enums.Role;
import jakarta.persistence.*;

@Entity
@Table(name = "app_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
        
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private Role role;
}
