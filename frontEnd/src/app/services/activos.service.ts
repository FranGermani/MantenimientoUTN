import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivoService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getActivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/activos`);
  }

  createActivo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/activos`, data);
  }

  updateActivo(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/activos/${id}`, data);
  }

  deleteActivo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/activos/${id}`);
  }
}

