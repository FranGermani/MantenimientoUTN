// orden-trabajo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esta línea si es necesario

  constructor(private http: HttpClient) {}

  crearOrdenTrabajo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/nuevaODT`, data); // Asegúrate de que esta línea esté apuntando a la ruta correcta
  }
}
