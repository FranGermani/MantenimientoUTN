import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@services/usuario.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  emailError: string = ''; // Mensaje específico para el campo email
  passwordError: string = ''; // Mensaje específico para el campo contraseña
  isPasswordVisible: boolean = false;

  constructor(private router: Router, private usersService: UsersService) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Método para el envío del formulario
  onSubmit() {
    // Limpia los mensajes de error previos
    this.emailError = '';
    this.passwordError = '';
    this.errorMessage = '';

    // Validaciones de email y contraseña antes de enviar
    this.validateEmailField();
    this.validatePasswordField();

    // Verifica si hay errores antes de proceder con el envío
    if (this.emailError || this.passwordError) {
      return;
    }

    const user = {
      email: this.email,
      password: this.password,
    };

    this.usersService.login(user).subscribe({
      next: (response) => {
        if (response.token) {
          if (user.email === 'Admin@gmail.com' && user.password === 'Admin123') {
            this.router.navigate(['/adminTutorial']);
          } else {
            this.router.navigate(['/user']);
          }
        }
      },
      error: (error) => {
        // Manejo de errores específicos basados en la respuesta del backend
        const backendError = error?.error?.error || 'Ha ocurrido un error inesperado.';

        if (backendError === 'Usuario no encontrado') {
          this.emailError = 'El email no está registrado o es incorrecto.';
        } else if (backendError === 'Contraseña incorrecta') {
          this.passwordError = 'La contraseña es incorrecta.';
        } else {
          this.errorMessage = backendError; // Mensaje de error general
        }
      },
    });
  }

  // Validación en tiempo real del email
  validateEmailField(): void {
    this.emailError = '';
    if (!this.email) {
      this.emailError = 'El campo de email no puede estar vacío.';
    } else if (/\s/.test(this.email)) {
      this.emailError = 'El email no puede contener espacios en blanco.';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.email)) {
      this.emailError = 'El email no tiene un formato válido.';
    }
  }

  // Validación en tiempo real de la contraseña
  validatePasswordField(): void {
    this.passwordError = '';
    if (this.password.length < 6 || this.password.length > 16) {
      this.passwordError = 'La contraseña debe tener entre 6 y 16 caracteres.';
    } else if (!/[A-Z]/.test(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos una letra mayúscula.';
    } else if (!/\d/.test(this.password)) {
      this.passwordError = 'La contraseña debe contener al menos un número.';
    } else if (/\s/.test(this.password)) {
      this.passwordError = 'La contraseña no puede contener espacios en blanco.';
    }
  }
}

