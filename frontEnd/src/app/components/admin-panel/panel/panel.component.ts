import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';
import { Panel } from '../../../interfaces/panel.interface';
import { ConcatenacionResponse } from '../../../interfaces/concatenacion-response';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  currentView: string = 'ordenes';
  ordenes: (Panel & { concatenacionIds?: string })[] = []; // Extender tipo Panel

  constructor(
    private ordenTrabajoService: OrdenTrabajoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (this.currentView === 'ordenes') {
      this.obtenerOrdenes();
    }
  }

  setView(view: string) {
    this.currentView = view;
    if (view === 'ordenes') {
      this.obtenerOrdenes();
    }
  }

  obtenerOrdenes() {
    this.ordenTrabajoService.getOrdenesTrabajo().subscribe({
      next: (data: Panel[]) => {
        this.ordenes = data;
        this.ordenes.forEach(orden => {
          this.obtenerConcatenacionIds(orden);
        });
      },
      error: (error) => {
        console.error('Error al obtener las órdenes de trabajo:', error);
      }
    });
  }

  obtenerConcatenacionIds(orden: Panel & { concatenacionIds?: string }) {
    // 1. Obtener el tag_diminutivo del activo
    this.ordenTrabajoService.getActivo(orden.id_activo).subscribe({
      next: (activo: any) => { // Ajusta el tipo de dato según la respuesta de tu servicio
        const tagDiminutivo = activo.tag_diminutivo; 
  
        // 2. Formatear cada ID con tres ceros a la izquierda
        const idsConcatenados = [
          tagDiminutivo, // Agregar el tag_diminutivo al principio
          orden.id_orden_trabajo.toString().padStart(3, '0'),
          orden.id_usuario.toString().padStart(3, '0'),
          orden.id_edificio.toString().padStart(3, '0'),
          orden.id_piso.toString().padStart(3, '0'),
          orden.id_sector.toString().padStart(3, '0'),
          orden.id_activo.toString().padStart(3, '0')
        ].join(''); // Concatenar los IDs
  
        orden.concatenacionIds = idsConcatenados;
        this.cdr.detectChanges(); 
      },
      error: (error) => {
        console.error("Error al obtener el activo:", error);
      }
    });
  }
  
  verDetalle(id: number) {
    console.log('Ver detalle', id);
  }

  editarOrden(id: number) {
    console.log('Editar orden', id);
  }

  eliminarOrden(id: number) {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta orden?')) {
      this.ordenTrabajoService.deleteOrdenTrabajo(id).subscribe({
        next: () => {
          console.log('Orden eliminada', id);
          this.ordenes = this.ordenes.filter(orden => orden.id_orden_trabajo !== id);
        },
        error: (error) => {
          console.error('Error al eliminar la orden:', error);
        }
      });
    }
  }
}
