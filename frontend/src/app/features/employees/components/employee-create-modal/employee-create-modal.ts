import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { CreateEmployee } from '../../models/create-employee.model';
import { EmployeeList } from '../../pages/employee-list/employee-list';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-employee-create-modal',
  styleUrl: './employee-create-modal.scss',
  templateUrl: './employee-create-modal.html',
})
export class EmployeeCreateModal {
  close = output<void>();

  createEmployeeForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    immatricule: new FormControl('')
  });

  constructor(private employeeService: EmployeeService, private router: Router, private employeeList: EmployeeList){

  }
  

  createEmployee() {
      const employee: CreateEmployee = {
      firstname: this.createEmployeeForm.value.firstname ?? '',
      lastname: this.createEmployeeForm.value.lastname ?? '',
      email: this.createEmployeeForm.value.email ?? '',
      immatricule: this.createEmployeeForm.value.immatricule ?? ''
    }; 
    this.employeeService.createEmployee(employee).subscribe({
      next: response => {
        this.employeeList.loadEmployees();
        this.close.emit();
        this.router.navigate(['/employees']);
      },
      error: error => {
        console.error(error);
      }
    });
    
  }
  
}
