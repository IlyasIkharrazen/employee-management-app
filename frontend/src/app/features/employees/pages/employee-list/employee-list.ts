import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit{

  employees = signal<Employee[]>([]);

  constructor(private employeeService: EmployeeService){
  }
  ngOnInit(){
     //this.employeeService.getEmployees().subscribe(employees =>  this.employees.set(employees));
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe(employees =>  this.employees.set(employees));
  }
 
}
