export interface Activo {
  id_activo?: number;  // Opcional, ya que puede no existir al crear uno nuevo
  nombre: string;
  tag_diminutivo: string;
  disponibilidad: number;
}