package com.ilyas.employeemanagement.service;

import com.ilyas.employeemanagement.entity.Employee;
import com.ilyas.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> searchEmployee(String firstname, String lastname, String email, String immatricule){

        String firstnameNormalized = firstname == null || firstname.isBlank() ? "" : firstname.trim();
        String lastnameNormalized = lastname == null || lastname.isBlank() ? "" : lastname.trim();
        String emailNormalized = email == null || email.isBlank() ? "" : email.trim();
        String immatriculeNormalized = immatricule == null || immatricule.isBlank() ? "" : immatricule.trim();

        if(firstnameNormalized.isEmpty() && lastnameNormalized.isEmpty() && emailNormalized.isEmpty() && immatriculeNormalized.isEmpty()){
            return null;
        }

        return employeeRepository.searchEmployee(firstnameNormalized, lastnameNormalized, emailNormalized, immatriculeNormalized);
    }
}
