import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, of, switchMap } from 'rxjs';

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
      this.searchForm.valueChanges.pipe(
        debounceTime(300),
        switchMap(value =>{
          const emptyForm = !value.firstname?.trim() && !value.lastname?.trim() && !value.email?.trim() && !value.immatricule?.trim();
          if(emptyForm){
            return of([]);
          }
          return this.employeeService.searchEmployees(value)}
        )
      ).subscribe(value => {
      this.employees.set(value);
      });
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe(employees =>  this.employees.set(employees));
  }


}
