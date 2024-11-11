import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@services/usuario.service';
import { User } from '../../../interfaces/body.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  emailError: string = '';
  passwordError: string = '';
  isPasswordVisible: boolean = false;

  constructor(private router: Router, private usersService: UsersService) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    this.emailError = '';
    this.passwordError = '';
    this.errorMessage = '';

    this.validateEmailField();
    this.validatePasswordField();

    if (this.emailError || this.passwordError) {
      return;
    }

    const user: User = {
      email: this.email,
      password: this.password,
    };

    this.usersService.login(user).subscribe({
      next: (response) => {
        if (response.token) {
          const userRole = this.usersService.getUserRole();

          if (userRole === 'admin') {
            this.router.navigate(['/adminTutorial']);
          } else if (userRole === 'user') {
            this.router.navigate(['/user']);
          }
        }
      },
      error: (error) => {
        const backendError = error?.error?.error || 'Ha ocurrido un error inesperado.';

        if (backendError === 'Usuario no encontrado') {
          this.emailError = 'El email no está registrado o es incorrecto.';
        } else if (backendError === 'Contraseña incorrecta') {
          this.passwordError = 'La contraseña es incorrecta.';
        } else {
          this.errorMessage = backendError;
        }
      },
    });
  }


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