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

  constructor(private http: HttpClient) {}

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/login`, user, { withCredentials: true })
      .pipe(
        tap(response => {
          // Actualiza el nombre del usuario en currentUserSubject si el login es exitoso
          if (response && response.nombre) {
            this.currentUserSubject.next(response.nombre);
          }
        }),
        catchError(error => {
          console.error('Error en la solicitud de login:', error);
          return throwError(() => error); // Pasa el error al componente para su manejo
        })
      );
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => this.currentUserSubject.next(null)), // Limpia el usuario actual al cerrar sesión
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
