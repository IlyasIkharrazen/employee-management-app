import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Inject } from "@angular/core";
import { catchError, map, of } from "rxjs";

export const authGuard: CanActivateFn = () => {
    const authService: inject(AuthService);
    const router: inject(Router);

    return authService.getCurrentUser().pipe(
        map(currentUser => {
            router.navigate(['/employees']);
            return true;
        }),
        catchError(error => {
            return of(router.createUrlTree(['/login']))
        })

    );
}