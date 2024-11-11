import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3000';
  private currentUserSubject = new BehaviorSubject<string | null>(null);
  private currentUserRole: string | null = null; 

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      return false;
    }
  
    try {
      const tokenParts = token.split('.'); 
      if (tokenParts.length !== 3) {
        return false; 
      }
  
      const payload = JSON.parse(atob(tokenParts[1])); 
  
      const exp = payload.exp; 
      if (typeof exp !== 'number' || exp * 1000 < Date.now()) {
        return false; 
      }
  
      return true; 
    } catch (error) {
      return false; 
    }
  }

  setToken(token: string, role: string): void {
    localStorage.setItem('auth-token', token);
    localStorage.setItem('user-role', role); 
    this.currentUserRole = role; 
  }

  getUserRole(): string | null {
    const storedRole = localStorage.getItem('user-role');
    if (storedRole) {
      return storedRole;
    }
    return this.currentUserRole; 
  }

  clearToken(): void {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-role'); 
    this.currentUserRole = null;
    this.currentUserSubject.next(null);
  }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, user, { withCredentials: true })
      .pipe(
        tap(response => {
          if (response && response.token && response.role && response.nombre) {
            this.setToken(response.token, response.role);
            this.currentUserSubject.next(response.nombre);
          }
        }),
        catchError(error => {
          console.error('Error en la solicitud de login:', error);
          return throwError(() => error);
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.clearToken()),
        catchError(error => {
          console.error('Error en la solicitud de logout:', error);
          return throwError(() => error);
        })
      );
  }

  getCurrentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }
}
