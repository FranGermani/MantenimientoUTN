import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivoService {
  private apiUrl = 'http://localhost:3000/api'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Obtener la lista de activos
  getActivos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/activos`);
  }

  // Crear un nuevo activo
  createActivo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/activos`, data);
  }

  // Actualizar un activo existente
  updateActivo(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/activos/${id}`, data);
  }

  // Eliminar un activo por ID
  deleteActivo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/activos/${id}`);
  }
}

