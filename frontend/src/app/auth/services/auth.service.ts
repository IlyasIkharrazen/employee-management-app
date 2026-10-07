import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, switchMap, tap } from "rxjs";
import { CsrfToken } from "../models/csrf-token.model";
import { LoginRequest } from "../models/login-request.model";
import { CurrentUser } from "../models/current-user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser = signal<CurrentUser | null>(null);

    constructor(private http: HttpClient){}

    getCsrfToken(): Observable<CsrfToken>{
        return this.http.get<CsrfToken>(
            'http://localhost:8080/auth/csrf',
            {
                withCredentials: true
            }
        );
    }

    login(loginRequest: LoginRequest): Observable<string>{
        return this.getCsrfToken().pipe(
            switchMap(csrf => {
                return this.http.post(
                    'http://localhost:8080/auth/login',
                    loginRequest,
                    {
                        headers:{
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

    getCurrentUser(): Observable<CurrentUser>{
        return this.http.get<CurrentUser>(
            'http://localhost:8080/auth/me',
            {
                withCredentials: true
            }
        ).pipe(
            tap(currentUser => {
                this.currentUser.set(currentUser);
            })
        );
    }

   
}