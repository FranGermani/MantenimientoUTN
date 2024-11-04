import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdenTrabajoService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getOperarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
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
    return this.http.post(`${this.apiUrl}/nuevaODT`, data);
  }

  getEdificioConPisos(id_edificio: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/edificios/${id_edificio}/pisos`);
  }

  getActivos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/activos`);
  }

  getActivo(id_activo: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/activos/${id_activo}`);
  }

  getOrdenesTrabajo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orden_trabajo`);
  }


  deleteOrdenTrabajo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/orden_trabajo/${id}`);
  }
  getConcatenacionIds (id: number): Observable<any>{
    return this.http.get(`${this.apiUrl}/orden-trabajo/${id}/concatenacion`);
  }
  getOrdenDetalle(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/orden_trabajo/${id}`);
  }
}
