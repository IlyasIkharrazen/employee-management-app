import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit{

  constructor(private employeeService: EmployeeService){
  }
  ngOnInit(){
     this.employeeService.getEmployees().subscribe(employees => console.log(employees));
  }
 
}
