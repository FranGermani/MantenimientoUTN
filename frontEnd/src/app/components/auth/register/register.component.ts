import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/register.interface'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {  // Tipado con la interfaz User
    nombre: '',
    email: {
      username: '',
      domain: ''
    },
    password: ''
  };
  errorMessage: string = '';
  isPasswordVisible: boolean = false;

  // Propiedades de validación en tiempo real para nombre, email y contraseña
  isNameValid: boolean = false;
  isEmailValid: boolean = false;
  isPasswordLengthValid: boolean = false;
  isPasswordUpperCaseValid: boolean = false;
  isPasswordNumberValid: boolean = false;
  isPasswordNoSpaces: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Validación en tiempo real del nombre
  validateNameRealTime(): void {
    this.isNameValid = this.user.nombre.trim().length > 0; // Verifica que no esté vacío
  }

  // Validación en tiempo real del email
  validateEmailRealTime(): void {
    const emailPattern = /^[a-zA-Z0-9._%+-]+$/; 
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    this.isEmailValid = emailPattern.test(this.user.email.username) && domainPattern.test(this.user.email.domain) && !/\s/.test(this.user.email.username) && !/\s/.test(this.user.email.domain);
  }

  // Validación en tiempo real de los requisitos de la contraseña
  validatePasswordRealTime(): void {
    const password = this.user.password;
    this.isPasswordLengthValid = password.length >= 6 && password.length <= 16;
    this.isPasswordUpperCaseValid = /[A-Z]/.test(password);
    this.isPasswordNumberValid = /\d/.test(password);
    this.isPasswordNoSpaces = !/\s/.test(password);
  }

  onSubmit() {
    const username = this.user.email.username;
    const domain = this.user.email.domain;

    this.errorMessage = ''; // Reinicia el mensaje de error antes de cada intento

    // Validación final antes del envío
    if (!this.isNameValid) {
      this.errorMessage = 'El nombre es obligatorio.';
      return;
    }
    if (!this.isEmailValid) {
      this.errorMessage = 'El email no es válido.';
      return;
    }
    if (!this.isPasswordLengthValid || !this.isPasswordUpperCaseValid || !this.isPasswordNumberValid || !this.isPasswordNoSpaces) {
      this.errorMessage = 'La contraseña no cumple con los requisitos.';
      return;
    }

    const email = `${username}@${domain}`;
    const registrationData: User = {  // Tipado con la interfaz User
      nombre: this.user.nombre,
      email: { username, domain }, // Usando la estructura de la interfaz
      password: this.user.password
    };

    this.http.post('http://localhost:3000/api/registro', registrationData)
      .subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente', response);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          if (error.status === 400 && error.error.message === 'El usuario ya existe') {
            this.errorMessage = 'Este correo ya está registrado. Por favor, usa otro o inicia sesión.';
          } else {
            this.errorMessage = 'Error al registrar el usuario. Inténtalo de nuevo más tarde.';
          }
          console.error('Error al registrar el usuario', error.error);
        }
      });
  }
}