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

    public String getEmail(){
        return this.email;
    }
    public String getPassword(){
        return this.password;
    }
    public Role getRole(){
        return this.role;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void setRole(Role role){
        this.role = role;
    }
}
