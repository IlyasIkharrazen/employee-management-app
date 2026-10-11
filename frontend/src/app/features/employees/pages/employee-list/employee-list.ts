import { Component, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, of, switchMap } from 'rxjs';
import { EmployeeSearchCriteria } from '../../models/employee-search-criteria.model';
import { AuthService } from '../../../../auth/services/auth.service';
import { UserHeader } from '../../../../auth/components/user-header/user-header';
import { EmployeeCreateModal } from '../../components/employee-create-modal/employee-create-modal';
import { DeleteEmployeeModal } from '../../components/delete-employee-modal/delete-employee-modal';
import { PutEmployeeModal } from '../../components/put-employee-modal/put-employee-modal';

@Component({
  imports: [
    ReactiveFormsModule,
    UserHeader,
    EmployeeCreateModal,
    DeleteEmployeeModal,
    PutEmployeeModal
],
  selector: 'app-employee-list',
  styleUrl: './employee-list.scss',
  templateUrl: './employee-list.html',
})
export class EmployeeList implements OnInit{

  employees = signal<Employee[]>([]);
  isCreateModalOpen = signal(false);
  isDeleteModalOpen = signal(false);
  isPutModalOpen = signal(false);
  employeeSelected!: Employee;

  searchForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    immatricule: new FormControl('')
  });

  constructor(private employeeService: EmployeeService, public authService: AuthService){
  }
  ngOnInit(){
      this.searchForm.valueChanges.pipe(
        debounceTime(100),
        switchMap(value =>{
          const emptyForm = !value.firstname?.trim() && !value.lastname?.trim() && !value.email?.trim() && !value.immatricule?.trim();
          if(emptyForm){
            return of([]);
          }
          const employeeSearchCriteria:  EmployeeSearchCriteria = {
              firstname: value.firstname ?? '',
              lastname: value.lastname ?? '',
              email: value.email ?? '',
              immatricule: value.immatricule ?? ''
          };

          return this.employeeService.searchEmployees(employeeSearchCriteria)}
        )
      ).subscribe(value => {
      this.employees.set(value);
      });
  }

  loadEmployees(){
    this.employeeService.getEmployees().subscribe({next: (employees) =>  this.employees.set(employees)});
  }

  openDeleteModal(employee: Employee){

    this.employeeSelected = employee;
    this.isDeleteModalOpen.set(true);

  }

  openPutModal(employee: Employee){
    this.employeeSelected = employee;
    this.isPutModalOpen.set(true);
  }


}
