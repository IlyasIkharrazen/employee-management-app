import { Component, Input, OnInit, output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { EmployeeList } from '../../pages/employee-list/employee-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployee } from '../../models/create-employee.model';

@Component({
  imports: [
    ReactiveFormsModule
  ],
  selector: 'app-put-employee-modal',
  styleUrl: './put-employee-modal.scss',
  templateUrl: './put-employee-modal.html',
})
export class PutEmployeeModal implements OnInit {
  close = output<void>();
  @Input() employee!: Employee;

  createEmployeeForm!: FormGroup;

  ngOnInit(): void {
      this.createEmployeeForm = new FormGroup({
    firstname: new FormControl(this.employee?.firstname ?? ''),
    lastname: new FormControl(this.employee?.lastname ?? ''),
    email: new FormControl(this.employee?.email ?? ''),
    immatricule: new FormControl(this.employee?.immatricule ?? '')
  });
  }
  constructor(private employeeService: EmployeeService, private router: Router, private employeeList: EmployeeList){

  }
  

  putEmployee() {
      const employee: Employee = {
      id: this.employee.id ?? '',
      firstname: this.createEmployeeForm.value.firstname ?? '',
      lastname: this.createEmployeeForm.value.lastname ?? '',
      email: this.createEmployeeForm.value.email ?? '',
      immatricule: this.createEmployeeForm.value.immatricule ?? ''
    }; 
    this.employeeService.putEmployee(employee).subscribe({
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
