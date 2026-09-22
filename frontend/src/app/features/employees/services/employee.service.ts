import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    constructor(private http: HttpClient) {

    }
}
