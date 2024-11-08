import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Panel } from '../../../../interfaces/panel.interface'; 

@Component({
  selector: 'app-orden-detalle-dialog',
  templateUrl: './orden-detalle-dialog.component.html',
  styleUrls: ['./orden-detalle-dialog.component.css']
})
export class OrdenDetalleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<OrdenDetalleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Panel 
  ) {}

  cerrar(): void {

    this.dialogRef.close();
   
  }
  
  imprimir(): void {
   
    const printContent = document.querySelector('.orden-generada-dialog') as HTMLElement;
  
    if (printContent) {
      const printIframe = document.createElement('iframe');
      printIframe.style.position = 'absolute';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = 'none';
      document.body.appendChild(printIframe);
  
      const printDocument = printIframe.contentDocument || printIframe.contentWindow?.document;
      if (printDocument) {
        printDocument.open();
        printDocument.write(`
          <html>
            <head>
              <title>Imprimir</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                }
                .orden-generada-dialog {
                  width: 100%;
                }
                table {
                  width: 100%;
                  border-collapse: collapse;
                }
                th, td {
                  border: 1px solid black;
                  padding: 8px;
                  text-align: left;
                }
                .no-imprimir {
                  display: none;
                }
              </style>
            </head>
            <body>
              ${printContent.outerHTML}
            </body>
          </html>
        `);
        printDocument.close();
  
        printIframe.contentWindow?.focus();
        printIframe.contentWindow?.print();
  
        setTimeout(() => {
          document.body.removeChild(printIframe);
        }, 1000);
      }
    }
  }
  
  
}  