import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';
import { OrdenTrabajo } from '../../../interfaces/orden-trabajo.interface'; // Asegúrate de que la ruta sea correcta
import { MatDialog } from '@angular/material/dialog';
import { OrdenGeneradaDialogComponent } from './orden-generada-dialog/orden-generada-dialog.component'; // Asegúrate de que la ruta sea correcta
@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styleUrls: ['./orden-trabajo.component.css'] 
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
  tiposOrden: any[] = [];
  tipoOrdenSeleccionado: number = 0;

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    public dialog: MatDialog // Inyecta MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarOperarios();
    this.cargarEdificios();
    this.cargarSectores();
    this.cargarActivos();
    this.cargarTiposOrden();
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

  cargarTiposOrden(): void {
    this.ordenTrabajoService.getTiposOrden().subscribe(
      (data: any[]) => {
        this.tiposOrden = data; // Asignamos los tipos de orden a la propiedad tiposOrden
      },
      (error) => {
        console.error('Error al obtener los tipos de orden:', error);
      }
    );
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
    const ordenTrabajoData: OrdenTrabajo = {
      fecha_impresion: this.fechaImpresion,
      hora_impresion: this.fechaImpresion,
      realizada: false,
      id_usuario: this.operarioSeleccionado,
      id_edificio: this.edificioSeleccionado,
      id_piso: this.pisoSeleccionado,
      id_sector: this.sectorSeleccionado,
      id_activo: this.activoSeleccionado,
      id_tipo_orden: this.tipoOrdenSeleccionado,
      observacion: this.observacion
    };
  
    // Validar campos obligatorios
    if (!this.fechaImpresion || !this.operarioSeleccionado || !this.edificioSeleccionado || 
        !this.pisoSeleccionado || !this.sectorSeleccionado || !this.activoSeleccionado || !this.tipoOrdenSeleccionado) {
      console.error('Error: Todos los campos, excepto "Observación", son obligatorios.');
      return; // No generar la orden si falta algún campo
    }
  
    this.ordenTrabajoService.crearOrdenTrabajo(ordenTrabajoData).subscribe({
      next: (response) => {
        this.abrirDialogoOrdenGenerada();
        console.log('Orden de trabajo generada:', response);
        this.resetForm(); 
      },
      error: (error) => {
        console.error('Error al generar la orden:', error);
      }
    });
  }

  abrirDialogoOrdenGenerada(): void {
    this.dialog.open(OrdenGeneradaDialogComponent, {
      width: '300px', // Ajusta el ancho según tus necesidades
    });
  }

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