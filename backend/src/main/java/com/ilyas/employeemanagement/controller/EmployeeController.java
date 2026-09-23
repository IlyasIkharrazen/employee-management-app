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

    @GetMapping("/search")
    public List<Employee> searchEmployee(@RequestParam(required = false) String firstname, @RequestParam(required = false) String lastname, @RequestParam(required = false) String email, @RequestParam(required = false) String immatricule){
        return employeeService.searchEmployee(firstname, lastname, email, immatricule);
    }






}
