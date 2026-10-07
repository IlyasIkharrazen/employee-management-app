package com.ilyas.employeemanagement.dto.auth;

import com.ilyas.employeemanagement.enums.Role;

public class CurrentUserResponse {
    private String email;
    private Role role;

    public CurrentUserResponse(String email, Role role){
        this.email = email;
        this.role = role;
    }

    public String getEmail(){
        return this.email;
    }
    public Role getRole(){
        return this.role;
    }

    public void setEmail(String email){
        this.email = email;
    }
    public void setRole(Role role){
        this.role = role;
    }

}
