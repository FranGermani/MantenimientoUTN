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

  constructor(private ordenTrabajoService: OrdenTrabajoService,
    private cdr: ChangeDetectorRef
  ) {
    
  }

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
    this.ordenTrabajoService.getConcatenacionIds(orden.id_orden_trabajo).subscribe({
      next: (data: ConcatenacionResponse) => {
        orden.concatenacionIds = data.concatenacion;
        this.cdr.detectChanges();  // Forzar actualización de la vista
      },
      error: (error) => {
        console.error("Error al obtener la concatenación de IDs:", error);
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
