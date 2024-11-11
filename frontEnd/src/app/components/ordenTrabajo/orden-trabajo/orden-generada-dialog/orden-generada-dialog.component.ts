import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orden-generada-dialog',
  templateUrl: './orden-generada-dialog.component.html',
  styleUrls: ['./orden-generada-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrdenGeneradaDialogComponent {
  constructor(public dialogRef: MatDialogRef<OrdenGeneradaDialogComponent>) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}