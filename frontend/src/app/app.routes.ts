import { Routes } from '@angular/router';
import { EmployeeList } from './features/employees/pages/employee-list/employee-list';

export const routes: Routes = [
    {
        path: 'employees',
        component: EmployeeList
    }
];
