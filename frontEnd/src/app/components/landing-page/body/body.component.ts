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

  constructor(private router: Router, private usersService: UsersService) {}

  onSubmit() {
    const user = {
      email: this.email,
      password: this.password,
    };

    this.usersService.login(user).subscribe({
      next: (response) => {
        // Redirigir al panel solo si la respuesta es exitosa y contiene el token
        if (response.token) {
          this.router.navigate(['/panel']);
        }
      },
      error: (error) => {
        this.errorMessage = error.error.error;
        console.error('Error en el login:', this.errorMessage);
      },
    });
  }
}
