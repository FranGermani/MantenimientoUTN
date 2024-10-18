import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la aplicación
})
export class DataService {
  private apiUrl = 'http://localhost:5000/api/edificio'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
