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
  private currentUserRole: string | null = null; // Almacena el rol del usuario

  constructor(private http: HttpClient) {}

  // Verificar si el usuario está autenticado basado en el token
  isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token');
    return !!token;
  }

  // Guardar el token y el rol del usuario después de iniciar sesión
  setToken(token: string, role: string): void {
    localStorage.setItem('auth-token', token);
    this.currentUserRole = role; // Guarda el rol en la variable local
  }

  // Obtener el rol del usuario actual
  getUserRole(): string | null {
    return this.currentUserRole;
  }

  // Limpiar el token y el rol al cerrar sesión
  clearToken(): void {
    localStorage.removeItem('auth-token');
    this.currentUserRole = null;
    this.currentUserSubject.next(null);
  }

  // Método de inicio de sesión
  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, user, { withCredentials: true })
      .pipe(
        tap(response => {
          if (response && response.token && response.role && response.nombre) {
            // Guarda el token y el rol basado en la respuesta del backend
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

  // Método de cierre de sesión
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

  // Proporciona el nombre del usuario actual
  getCurrentUser(): Observable<string | null> {
    return this.currentUserSubject.asObservable();
  }
}
