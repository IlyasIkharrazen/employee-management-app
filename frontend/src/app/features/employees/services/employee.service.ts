import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
    constructor(private http: HttpClient) {

    }
    getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>('http://localhost:8080/employees');
    }
    searchEmployees(form: any): Observable<Employee[]> {
        return this.http.get<Employee[]>('http://localhost:8080/employees')
    }
}
