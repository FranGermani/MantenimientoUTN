import { Component } from '@angular/core';
import { UsersService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.css']
})
export class UserPanelTutorial {
  currentView: string = 'presentacion';

  constructor(private userService: UsersService, private router: Router) {}

  setView(view: string) {
    this.currentView = view;
  }

  cerrarSesion() {
    this.userService.logout().subscribe(
      () => {
        console.log('Sesión cerrada exitosamente');
        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Error al cerrar sesión', error);
      }
    );
  }
}
