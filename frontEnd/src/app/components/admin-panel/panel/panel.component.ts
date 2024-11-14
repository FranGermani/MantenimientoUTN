import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';
import { Panel } from '../../../interfaces/panel.interface';
import { MatDialog } from '@angular/material/dialog';
import { BorrarOrdenDialogComponent } from '../panel/borrar-orden-dialog/borrar-orden-dialog.component';
import { OrdenDetalleDialogComponent } from '../panel/orden-detalle-dialog/orden-detalle-dialog.component';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  currentView: string = 'ordenes';
  ordenes: (Panel & { concatenacionIds?: string })[] = [];
  ordenesFiltradas: (Panel & { concatenacionIds?: string })[] = [];
  selectedColumn: string = 'nombre_edificio';
  filterValue: string = '';
  opciones: string[] = [];

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.ordenTrabajoService.getOrdenesTrabajo().subscribe({
      next: (data) => {
        this.ordenes = data;
        this.ordenes.forEach((orden) => {
          this.obtenerConcatenacionIds(orden);
        });
        this.ordenesFiltradas = [...this.ordenes];
      },
      error: (err) => console.error(err),
    });
  }




  actualizarOpciones() {
    const columna = this.selectedColumn;
  
    if (columna === 'realizada') {
      this.opciones = ['Sí', 'No'];
    } else {
      const valoresUnicos = new Set(
        this.ordenes.map((orden) => orden[columna]).filter((valor) => valor)
      );
      this.opciones = Array.from(valoresUnicos);
    }
  
    this.filterValue = ''; 
  }
  

  obtenerConcatenacionIds(orden: Panel & { concatenacionIds?: string }) {
    this.ordenTrabajoService.getActivo(orden.id_activo).subscribe({
      next: (activo: any) => {
        const tagDiminutivo = (activo.tag_diminutivo || 'DEFAULT').trim();

        const idsConcatenados = [
          tagDiminutivo,
          orden.id_orden_trabajo.toString().padStart(3, '0'),
          orden.id_usuario.toString().padStart(3, '0'),
          orden.id_edificio.toString().padStart(3, '0'),
          orden.id_piso.toString().padStart(3, '0'),
          orden.id_sector.toString().padStart(3, '0'),
          orden.id_activo.toString().padStart(3, '0'),
        ]
          .filter((parte) => parte)
          .join('-')
          .replace(/\s*-\s*/g, '-');

        orden.concatenacionIds = idsConcatenados;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al obtener el activo:', error);
      },
    });
  }

  filtrarOrdenes() {
    const columna = this.selectedColumn;
    const valor = this.filterValue;
  
    if (columna === 'realizada') {
      const filtroRealizada = valor === 'Sí' ? 1 : 0;
      this.ordenesFiltradas = this.ordenes.filter(orden => Number(orden.realizada) === filtroRealizada);
    } else {
      this.ordenesFiltradas = this.ordenes.filter(orden => orden[columna] === valor);
    }
  }
  



  calcularCodigoUnico(orden: Panel): string {
    const tagDiminutivo = orden.nombre_tag || 'TAG';
    return [
      tagDiminutivo,
      orden.id_orden_trabajo.toString().padStart(3, '0'),
      orden.id_usuario.toString().padStart(3, '0'),
      orden.id_edificio.toString().padStart(3, '0'),
      orden.id_piso.toString().padStart(3, '0'),
      orden.id_sector.toString().padStart(3, '0'),
      orden.id_activo.toString().padStart(3, '0'),
    ].join('-');
  }


  verDetalle(orden: Panel) {
    this.dialog.open(OrdenDetalleDialogComponent, {
      width: '90vw',
      height: '65vh',
      data: orden,
    });
  }

  editarOrden(id: number) {
    console.log('Editar orden', id);
  }

  eliminarOrden(id: number) {
    const dialogRef = this.dialog.open(BorrarOrdenDialogComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ordenTrabajoService.deleteOrdenTrabajo(result).subscribe({
          next: () => {
            console.log('Orden eliminada', id);
            this.ordenes = this.ordenes.filter(
              (orden) => orden.id_orden_trabajo !== id
            );
            this.ordenesFiltradas = this.ordenesFiltradas.filter(
              (orden) => orden.id_orden_trabajo !== id
            );
          },
          error: (error) => {
            console.error('Error al eliminar la orden:', error);
          },
        });
      }
    });
  }
  reiniciarFiltro() {
    this.ordenesFiltradas = [...this.ordenes];
    this.filterValue = '';
    this.selectedColumn = 'nombre_edificio';
    this.actualizarOpciones();
  }
}