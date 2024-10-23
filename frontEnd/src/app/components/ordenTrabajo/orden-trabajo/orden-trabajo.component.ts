import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrl: './orden-trabajo.component.css'
})
export class OrdenTrabajoComponent implements OnInit {
  fechaImpresion: string = '';
  observacion: string = '';
  operarios: any[] = [];  
  operarioSeleccionado: string = ''; 
  edificios: any[] = [];  // Nueva lista de edificios
  edificioSeleccionado: string = ''; // Edificio seleccionado
  pisos: any[] = [];      // Nueva lista de pisos
  pisoSeleccionado: string = '';     // Piso seleccionado
  sectores: any[] = [];   // Nueva lista de sectores
  sectorSeleccionado: string = '';   // Sector seleccionado
  activo: string = ''; 

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  ngOnInit(): void {
    this.cargarOperarios();
    this.cargarEdificios();
    this.cargarPisos();
    this.cargarSectores();
  }

  cargarOperarios() {
    this.ordenTrabajoService.getOperarios().subscribe(data => {
      this.operarios = data;
    });
  }

  cargarEdificios() {
    this.ordenTrabajoService.getEdificios().subscribe(data => {
      this.edificios = data;
    });
  }

  cargarPisos() {
    this.ordenTrabajoService.getPisos().subscribe(data => {
      this.pisos = data;
    });
  }

  cargarSectores() {
    this.ordenTrabajoService.getSectores().subscribe(data => {
      this.sectores = data;
    });
  }

  generarOrden() {
    const ordenTrabajoData = {
      fecha_impresion: this.fechaImpresion,
      hora_impresion: this.fechaImpresion,
      realizada: false,
      id_usuario: this.operarioSeleccionado,
      id_edificio: this.edificioSeleccionado, 
      id_piso: this.pisoSeleccionado,
      id_sector: this.sectorSeleccionado,
      id_tag: this.activo,
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
