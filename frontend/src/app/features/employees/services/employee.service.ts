import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeSearchCriteria } from '../models/employee-search-criteria.model';
import { AuthService } from '../../../auth/services/auth.service';
import { CreateEmployee } from '../models/create-employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
    constructor(private http: HttpClient, private authService: AuthService) {

    }
    getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(
            'http://localhost:8080/employees',
        {
            withCredentials: true
        });
    }
    searchEmployees(form: EmployeeSearchCriteria): Observable<Employee[]> {
        const params = new HttpParams()
        .set('firstname', form.firstname)
        .set('lastname', form.lastname)
        .set('email', form.email)
        .set('immatricule', form.immatricule)
        return this.http.get<Employee[]>('http://localhost:8080/employees/search',
            {params, withCredentials: true}
        )
    }

    createEmployee(employee: CreateEmployee): Observable<string>{
        return this.authService.getCsrfToken().pipe(
            switchMap(csrf => {
                return this.http.post(
                    'http://localhost:8080/employees',
                    employee,
                    {
                        headers: {
                            [csrf.headerName]: csrf.token
                        },
                        withCredentials: true,
                        responseType: 'text'
                    }
                );
            }

            )
        );
    }
}
