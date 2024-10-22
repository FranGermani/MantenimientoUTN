import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    nombre: '',
    email: {
      username: '',
      domain: ''
    },
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Almacenar las partes del email en variables separadas
    const username = this.user.email.username;
    const domain = this.user.email.domain;
  
    // Verificar que ambas partes del email estén completas
    if (!username || !domain) {
      console.log('Email no completo');
      return; // Salir si no se ha completado
    }
  
    // Construir el email completo
    const email = `${username}@${domain}`;
    
    // Realizar la solicitud HTTP para registrar al usuario
    const registrationData = {
      nombre: this.user.nombre,
      email: email,
      password: this.user.password
    };
    
    console.log(email);
    console.log('Datos de registro enviados:', registrationData);
    
    this.http.post('http://localhost:3000/api/usuarios', registrationData)
      .subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente', response);
          // Puedes redirigir a otra página después del registro exitoso
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error.error);
        }
      });
  }  
}