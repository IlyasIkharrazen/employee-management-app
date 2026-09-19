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
}
