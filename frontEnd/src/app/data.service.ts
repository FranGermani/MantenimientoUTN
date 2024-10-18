import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Esto permite que el servicio esté disponible en toda la aplicación
})
export class DataService {
  private apiUrl = 'https://api.example.com/data'; // Reemplaza con tu URL de API

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
