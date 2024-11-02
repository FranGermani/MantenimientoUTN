import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../../services/orden-trabajo.service';
import { UsersService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-user-ot',
  templateUrl: './user-ot.component.html',
  styleUrls: ['./user-ot.component.css']
})
export class UserOtComponent implements OnInit {
  ordenes: any[] = [];

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    // Obtener el nombre del usuario actual
    this.usersService.getCurrentUser().subscribe((nombreUsuario: string | null) => {
      if (nombreUsuario) { // Verificar si el nombre de usuario no es nulo
        this.ordenTrabajoService.getOrdenesTrabajo().subscribe((data: any[]) => {
          // Filtrar las órdenes por el nombre de usuario
          this.ordenes = data.filter(orden => orden.nombre_usuario === nombreUsuario);
        });
      } else {
        // Manejar el caso en que el nombre de usuario sea nulo (opcional)
        console.error("No se pudo obtener el nombre de usuario.");
        this.ordenes = []; // O mostrar un mensaje de error al usuario
      }
    });
  }
}