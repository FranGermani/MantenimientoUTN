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
  ordenes: Panel[] = []; 

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.usersService.getCurrentUser().subscribe((nombreUsuario: string | null) => {
      if (nombreUsuario) {
        this.ordenTrabajoService.getOrdenesTrabajo().subscribe((data: Panel[]) => {
          this.ordenes = data.filter((orden: Panel) => orden.nombre_usuario === nombreUsuario)
            .map((orden: Panel) => {
              this.obtenerConcatenacionIds(orden); // Llama a la función para generar la concatenación
              return orden;
            });
        });
      } else {
        console.error("No se pudo obtener el nombre de usuario.");
        this.ordenes = []; 
      }
    });
  }

  obtenerConcatenacionIds(orden: Panel) {
    // 1. Obtener el tag_diminutivo del activo
    this.ordenTrabajoService.getActivo(orden.id_activo).subscribe({
      next: (activo: any) => {
        const tagDiminutivo = activo.tag_diminutivo;

        // 2. Formatear cada ID con tres ceros a la izquierda
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
        this.cdr.detectChanges(); // Actualizar la vista
      },
      error: (error) => {
        console.error('Error al obtener el activo:', error);
      },
    });
  }
}