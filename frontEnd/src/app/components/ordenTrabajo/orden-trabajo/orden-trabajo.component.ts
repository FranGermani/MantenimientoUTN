import { Component } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent {
  fechaImpresion: string = '';
  fechaTerminacion: string = '';
  observacion: string = '';
  operario: string = '';
  edificio: string = '';
  piso: string = '';
  sector: string = '';
  activo: string = ''; // Asumiendo que necesitas este campo

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  generarOrden() {
    const ordenTrabajoData = {
      fecha_impresion: this.fechaImpresion,
      hora_inicio: this.fechaTerminacion, // Si esto debería ser hora de inicio, asegúrate de ajustarlo
      hora_final: this.fechaTerminacion, // Asegúrate de que esto sea lo que esperas
      realizada: false, // Cambia esto según tu lógica
      id_usuario: this.operario, // Asumiendo que el ID del operario es el valor seleccionado
      id_edificio: this.edificio,
      id_piso: this.piso,
      id_sector: this.sector,
      id_tag: this.activo, // Si necesitas este campo
      observacion: this.observacion
    };

    this.ordenTrabajoService.crearOrdenTrabajo(ordenTrabajoData).subscribe(
      response => {
        console.log('Orden de trabajo generada:', response);
      },
      error => {
        console.error('Error al generar la orden:', error);
      }
    );
  }
}
