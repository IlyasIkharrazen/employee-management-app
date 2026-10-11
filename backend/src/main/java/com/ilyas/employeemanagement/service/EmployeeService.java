package com.ilyas.employeemanagement.service;

import com.ilyas.employeemanagement.entity.Employee;
import com.ilyas.employeemanagement.repository.EmployeeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public ResponseEntity<Void> putEmployee(Employee employee){
        Optional<Employee> employeeUpdated = this.employeeRepository.findById(employee.getId());
        employeeUpdated.ifPresent(value -> {
            value.setFirstname(employee.getFirstname());
            value.setLastname(employee.getLastname());
            value.setEmail(employee.getEmail());
            value.setImmatricule(employee.getImmatricule());
        } );
        employeeUpdated.ifPresent(this.employeeRepository::save);
        return ResponseEntity.noContent().build();
    }

    public void deleteEmployee(Long employeeId){
         this.employeeRepository.deleteById(employeeId);
    }

    public List<Employee> searchEmployee(String firstname, String lastname, String email, String immatricule){

        String firstnameNormalized = firstname == null || firstname.isBlank() ? "" : firstname.trim();
        String lastnameNormalized = lastname == null || lastname.isBlank() ? "" : lastname.trim();
        String emailNormalized = email == null || email.isBlank() ? "" : email.trim();
        String immatriculeNormalized = immatricule == null || immatricule.isBlank() ? "" : immatricule.trim();

        if(firstnameNormalized.isEmpty() && lastnameNormalized.isEmpty() && emailNormalized.isEmpty() && immatriculeNormalized.isEmpty()){
            return List.of();
        }

        return employeeRepository.searchEmployee(firstnameNormalized, lastnameNormalized, emailNormalized, immatriculeNormalized);
    }
}
