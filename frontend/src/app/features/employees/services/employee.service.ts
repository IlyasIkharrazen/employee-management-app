import { HttpClient, HttpParams } from '@angular/common/http';
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
        const params = new HttpParams()
        .set('firstname', form.firstname)
        .set('lastname', form.lastname)
        .set('email', form.email)
        .set('immatricule', form.immatricule)
        return this.http.get<Employee[]>('http://localhost:8080/employees/searh',
            {params}
        )
    }
}
