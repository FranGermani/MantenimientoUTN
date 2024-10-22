import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private apiUrl = 'http://localhost:3000'; 

    constructor(private http: HttpClient) {}

    login(user: { email: string; password: string }): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/api/login`, user,{ withCredentials: true });
    }

    panel(user: any): Observable<any> {
      return this.http.get(`${this.apiUrl}/panel`);
    }
}
