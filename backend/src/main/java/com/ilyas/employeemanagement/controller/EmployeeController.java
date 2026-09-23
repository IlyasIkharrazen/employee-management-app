package com.ilyas.employeemanagement.controller;

import com.ilyas.employeemanagement.entity.Employee;
import com.ilyas.employeemanagement.service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployee();
    }

    @PostMapping
    public Employee createEmployee (@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }








}
