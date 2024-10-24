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
  isPasswordVisible: boolean = false; // Controla la visibilidad de la contraseña

  constructor(private router: Router, private usersService: UsersService) {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    // Limpiar el mensaje de error antes de validar
    this.errorMessage = '';

    // Validaciones de email
    if (!this.validateEmail(this.email)) {
      if (!this.email) {
        this.errorMessage += 'El campo de email no puede estar vacío. ';
      } else if (/\s/.test(this.email)) {
        this.errorMessage += 'El email no puede contener espacios en blanco. ';
      } else {
        this.errorMessage += 'El email contiene caracteres especiales no permitidos. ';
      }
    }

    // Validaciones de contraseña
    if (!this.validatePassword(this.password)) {
      if (this.password.length < 6 || this.password.length > 16) {
        this.errorMessage += 'La contraseña debe tener entre 6 y 16 caracteres. ';
      } else if (!/[A-Z]/.test(this.password)) {
        this.errorMessage += 'La contraseña debe contener al menos una letra mayúscula. ';
      } else if (!/\d/.test(this.password)) {
        this.errorMessage += 'La contraseña debe contener al menos un número. ';
      } else if (/\s/.test(this.password)) {
        this.errorMessage += 'La contraseña no puede contener espacios en blanco. ';
      }
    }

    // Si hay un mensaje de error, mostrar la alerta y recargar la página
    if (this.errorMessage) {
      alert(this.errorMessage); // Mostrar el mensaje de error en una alerta
      setTimeout(() => {
        window.location.reload(); // Recargar la página después de 1 segundo
      }, 1000);
      return;
    }

    // Si las validaciones se cumplen, proceder con el login
    const user = {
      email: this.email,
      password: this.password,
    };

    this.usersService.login(user).subscribe({
      next: (response) => {
        // Redirigir al panel solo si la respuesta es exitosa y contiene el token
        if (response.token) {
          this.router.navigate(['/adminTutorial']);
        }
      },
      error: (error) => {
        this.errorMessage = error.error.error;
        console.error('Error en el login:', this.errorMessage);
      },
    });
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email) && !/\s/.test(email);
  }

  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    return passwordPattern.test(password) && !/\s/.test(password);
  }
}
