// orden-detalle-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Panel } from '../../../../interfaces/panel.interface'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-orden-detalle-dialog',
  templateUrl: './orden-detalle-dialog.component.html',
  styleUrls: ['./orden-detalle-dialog.component.css']
})
export class OrdenDetalleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OrdenDetalleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Panel // Inyecta los datos de la orden
  ) {}

  cerrar(): void {
    this.dialogRef.close();
  }

  imprimir() {
  window.print();
}
}