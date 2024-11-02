export interface Panel {
  id_orden_trabajo: number;  // Asumiendo que tienes un ID para la orden
  fecha_impresion: string; 
  nombre_usuario: string;
  nombre_edificio: string;
  nombre_piso: string;
  nombre_sector: string;
  nombre_activo: string;
  realizada: boolean;
}
