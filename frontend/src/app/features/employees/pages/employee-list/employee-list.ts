import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

@Component({
  imports: [],
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList {

  constructor(private employeeService: EmployeeService){
  }
  ngOnInit(){
     this.employeeService.getEmployees().subscribe(employees => console.log(employees));
  }
 
}
