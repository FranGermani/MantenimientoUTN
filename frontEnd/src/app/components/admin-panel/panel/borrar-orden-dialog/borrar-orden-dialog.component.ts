import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-borrar-orden-dialog',
  templateUrl: './borrar-orden-dialog.component.html',
  styleUrls: ['./borrar-orden-dialog.component.css']
})
export class BorrarOrdenDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BorrarOrdenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}