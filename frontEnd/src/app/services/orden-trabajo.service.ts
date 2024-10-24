import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api'; // Cambia esta línea si es necesario

  constructor(private http: HttpClient) {}

  getOperarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`); // Ajusta el endpoint según tu backend
  }

  getEdificios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/edificio`);
  }
  
  getPisos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pisos`);
  }
  
  getSectores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sector`);
  }

  crearOrdenTrabajo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/nuevaODT`, data); // Asegúrate de que esta línea esté apuntando a la ruta correcta
  }
  getEdificioConPisos(id_edificio: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/edificios/${id_edificio}/pisos`);
  }
  getActivos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activos`);
  }
  
  getOrdenesTrabajo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orden_trabajo`);
  }
  
}
