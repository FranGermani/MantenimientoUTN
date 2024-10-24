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
  edificios: any[] = [];  // Lista de edificios
  edificioSeleccionado: any= ''; // Edificio seleccionado
  pisos: any[] = [];      // Lista de pisos dinámicos según el edificio seleccionado
  pisoSeleccionado: string = '';     // Piso seleccionado
  sectores: any[] = [];   // Lista de sectores
  sectorSeleccionado: string = '';   // Sector seleccionado
  activo: string = ''; 

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  ngOnInit(): void {
    this.cargarOperarios();
    this.cargarEdificios();
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

  // Cargar los pisos basados en el edificio seleccionado
  onEdificioSeleccionado() {
    if (this.edificioSeleccionado) {
      this.ordenTrabajoService.getEdificioConPisos(this.edificioSeleccionado).subscribe(data => {
        this.pisos = data.pisos; // Accede a los pisos devueltos desde el backend
      });
    }
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
