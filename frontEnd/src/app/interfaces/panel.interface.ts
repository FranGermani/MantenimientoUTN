export interface Panel {
  id_orden_trabajo: number;
  fecha_impresion: string;
  hora_impresion: string;
  realizada: number; 
  id_usuario: number; // Agregar id_usuario
  nombre_usuario: string;
  nombre_tag: string | null; 
  id_tag: number | null; 
  nombre_activo: string;
  id_activo: number;   // Agregar id_activo
  nombre_edificio: string;
  id_edificio: number; // Agregar id_edificio
  nombre_piso: string;
  id_piso: number;     // Agregar id_piso
  nombre_sector: string;
  id_sector: number;   // Agregar id_sector
  codigo: string | null;
  observacion: string;
}