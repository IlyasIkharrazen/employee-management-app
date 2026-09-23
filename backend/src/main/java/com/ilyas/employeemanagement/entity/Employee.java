package com.ilyas.employeemanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstname;
    private String lastname;
    private String email;

    private String immatricule;

    protected Employee(){

    }

    public Employee(String firstname, String lastname, String email, String immatricule){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.immatricule = immatricule;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }
    public void setLastname(String lastname){
        this.lastname = lastname;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setImmatricule(String immatricule){this.immatricule = immatricule;}

    public Long getId(){
        return this.id;
    }
    public String getFirstname(){
        return this.firstname;
    }
    public String getLastname(){
        return this.lastname;
    }
    public String getEmail(){
        return this.email;
    }
    public String getImmatricule(){
        return this.immatricule;
    }

}
