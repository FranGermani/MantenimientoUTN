import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrdenTrabajoService } from '../../../../services/orden-trabajo.service';
import { UsersService } from '../../../../services/usuario.service';
import { Panel } from '../../../../interfaces/panel.interface';

@Component({
  selector: 'app-user-ot',
  templateUrl: './user-ot.component.html',
  styleUrls: ['./user-ot.component.css']
})
export class UserOtComponent implements OnInit {
  ordenes: Panel[] = []; // Lista de órdenes de trabajo

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef // Detecta cambios en el DOM
  ) {}

  ngOnInit(): void {
    this.obtenerOrdenes(); // Carga las órdenes al inicializar el componente
  }

  obtenerOrdenes(): void {
    // Obtiene el usuario actual y filtra las órdenes asociadas a él
    this.usersService.getCurrentUser().subscribe((nombreUsuario: string | null) => {
      if (nombreUsuario) {
        this.ordenTrabajoService.getOrdenesTrabajo().subscribe((data: Panel[]) => {
          this.ordenes = data
            .filter((orden: Panel) => orden.nombre_usuario === nombreUsuario)
            .map((orden: Panel) => {
              this.obtenerConcatenacionIds(orden); // Genera el ID concatenado
              orden.realizada = false; // Inicializa la propiedad "realizada"
              return orden;
            });
        });
      } else {
        console.error('No se pudo obtener el nombre de usuario.');
        this.ordenes = []; // Limpia la lista si no hay usuario
      }
    });
  }

  obtenerConcatenacionIds(orden: Panel): void {
    // Genera el ID concatenado basado en los atributos de la orden
    this.ordenTrabajoService.getActivo(orden.id_activo).subscribe({
      next: (activo: any) => {
        const tagDiminutivo = activo.tag_diminutivo;
        const idsConcatenados = [
          tagDiminutivo,
          orden.id_orden_trabajo.toString().padStart(3, '0'),
          orden.id_usuario.toString().padStart(3, '0'),
          orden.id_edificio.toString().padStart(3, '0'),
          orden.id_piso.toString().padStart(3, '0'),
          orden.id_sector.toString().padStart(3, '0'),
          orden.id_activo.toString().padStart(3, '0'),
        ].join('');
        orden.concatenacionIds = idsConcatenados;
        this.cdr.detectChanges(); // Actualiza la vista
      },
      error: (error) => {
        console.error('Error al obtener el activo:', error);
      },
    });
  }

  marcarComoRealizado(orden: Panel): void {
    // Alterna el estado de "realizada"
    orden.realizada = !orden.realizada;
    console.log(
      `Orden ${orden.concatenacionIds} marcada como ${
        orden.realizada ? 'realizada' : 'pendiente'
      }`
    );
  }
}
