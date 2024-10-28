import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css']  // Corrige el nombre de la propiedad 'styleUrls'
})
export class OrdenTrabajoComponent implements OnInit {
  fechaImpresion: string = '';
  observacion: string = '';
  operarios: any[] = [];  
  operarioSeleccionado: string = ''; 
  edificios: any[] = []; 
  edificioSeleccionado: any = ''; 
  pisos: any[] = []; 
  pisoSeleccionado: string = ''; 
  sectores: any[] = [];
  sectorSeleccionado: string = '';
  activos: any[] = [];
  activoSeleccionado: string = '';

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  ngOnInit(): void {
    this.cargarOperarios();
    this.cargarEdificios();
    this.cargarSectores();
    this.cargarActivos();
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

  onEdificioSeleccionado() {
    if (this.edificioSeleccionado) {
      this.ordenTrabajoService.getEdificioConPisos(this.edificioSeleccionado).subscribe(data => {
        this.pisos = data.pisos;
      });
    }
  }

  cargarSectores() {
    this.ordenTrabajoService.getSectores().subscribe(data => {
      this.sectores = data;
    });
  }

  cargarActivos() {
    this.ordenTrabajoService.getActivos().subscribe(data => {
      this.activos = data;
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
      id_activo: this.activoSeleccionado,
      observacion: this.observacion
    };

    this.ordenTrabajoService.crearOrdenTrabajo(ordenTrabajoData).subscribe(
      response => {
        console.log('Orden de trabajo generada:', response);
        // Llamamos al método para restablecer el formulario
        this.resetForm();
      },
      error => {
        console.error('Error al generar la orden:', error);
      }
    );
  }

  // Método para restablecer el formulario
  resetForm() {
    this.fechaImpresion = '';
    this.observacion = '';
    this.operarioSeleccionado = '';
    this.edificioSeleccionado = '';
    this.pisos = [];
    this.pisoSeleccionado = '';
    this.sectorSeleccionado = '';
    this.activoSeleccionado = '';
  }
}
