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
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const username = this.user.email.username;
    const domain = this.user.email.domain;

    // Limpiar mensajes de error antes de cada intento de validación
    this.errorMessage = '';

    // Validaciones
    if (!this.validateEmail(username, domain)) {
      if (!username) {
        this.errorMessage += 'El nombre de usuario no puede estar vacío. ';
      } else if (!domain) {
        this.errorMessage += 'El dominio del correo no puede estar vacío. ';
      } else if (/\s/.test(username) || /\s/.test(domain)) {
        this.errorMessage += 'El email no puede contener espacios en blanco. ';
      } else {
        this.errorMessage += 'El email contiene caracteres especiales no permitidos. ';
      }
    }

    if (!this.validatePassword(this.user.password)) {
      if (this.user.password.length < 6 || this.user.password.length > 16) {
        this.errorMessage += 'La contraseña debe tener entre 6 y 16 caracteres. ';
      } else if (!/[A-Z]/.test(this.user.password)) {
        this.errorMessage += 'La contraseña debe contener al menos una letra mayúscula. ';
      } else if (!/\d/.test(this.user.password)) {
        this.errorMessage += 'La contraseña debe contener al menos un número. ';
      } else if (/\s/.test(this.user.password)) {
        this.errorMessage += 'La contraseña no puede contener espacios en blanco. ';
      }
    }

    // Si hay errores, mostrar mensaje y refrescar la página
    if (this.errorMessage) {
      alert(this.errorMessage); // Muestra una alerta con los errores
      setTimeout(() => {
        window.location.reload(); // Recarga la página después de mostrar el error
      }, 1000); // Espera 1 segundo antes de refrescar
      return;
    }

    // Si no hay errores, proceder con el registro
    const email = `${username}@${domain}`;
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
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error.error);
        }
      });
  }

  validateEmail(username: string, domain: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+$/; // Permite caracteres válidos en ambas partes
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Valida el dominio
    return emailPattern.test(username) && domainPattern.test(domain) && !/\s/.test(username) && !/\s/.test(domain);
  }

  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    return passwordPattern.test(password) && !/\s/.test(password);
  }
}
