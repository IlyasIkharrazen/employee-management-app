import { Routes } from '@angular/router';
import { EmployeeList } from './features/employees/pages/employee-list/employee-list';
import { Login } from './auth/pages/login/login';

export const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeList
    },
    {
        path: 'login',
        component: Login
    }
];
