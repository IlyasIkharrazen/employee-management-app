import { Component, Input, output } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { Router } from '@angular/router';
import { EmployeeList } from '../../pages/employee-list/employee-list';

@Component({
  imports: [],
  selector: 'app-delete-employee-modal',
  styleUrl: './delete-employee-modal.scss',
  templateUrl: './delete-employee-modal.html',
})
export class DeleteEmployeeModal {
  close = output<void>();
  @Input() employee!: Employee;

  constructor(private employeeService: EmployeeService, private router: Router, private employeeList: EmployeeList){
  }

  delete(){
    this.employeeService.deleteEmployee(this.employee).subscribe({
      next: response => {
        this.employeeList.loadEmployees();
        this.close.emit();
        this.router.navigate(['/employees']);
      },
      error: error => {
        console.error(error);
      }
    });;
  }
  
}
