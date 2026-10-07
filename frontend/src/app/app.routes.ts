import { Routes } from '@angular/router';
import { EmployeeList } from './features/employees/pages/employee-list/employee-list';
import { Login } from './auth/pages/login/login';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeList,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login
    }
];
