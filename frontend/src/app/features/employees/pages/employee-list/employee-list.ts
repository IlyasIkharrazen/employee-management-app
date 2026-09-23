import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [
    ReactiveFormsModule,
  ],
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit{

  employees = signal<Employee[]>([]);

  searchForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    immatricule: new FormControl('')
  });

  constructor(private employeeService: EmployeeService){
  }
  ngOnInit(){
      this.searchForm.valueChanges.subscribe(value => {
      this.employeeService.searchEmployees(value).subscribe(employees => this.employees.update((value) => value = employees));
      console.log(this.employees());
      });
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe(employees =>  this.employees.set(employees));
  }


}
