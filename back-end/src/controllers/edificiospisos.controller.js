import { pool } from '../../config/db.js'; 

const obtenerPisosPorEdificio = async (req, res) => {
  try {
    const { id_edificio } = req.params; 

    const edificioQuery = `
      SELECT * 
      FROM edificio 
      WHERE id_edificio = ? AND nombre = 'UTN FRVT'
    `;

    const pisosQuery = `
      SELECT p.* 
      FROM piso_nivel p
      WHERE p.nombre IN ('Planta Baja', '1er. Piso', '2do. Piso', 'Nivel 0', 'Nivel Bajo 0')
    `;

    if (id_edificio != 1) {
      return res.status(400).json({ message: 'Este edificio no está soportado actualmente' });
    }

    const [edificio] = await pool.query(edificioQuery, [id_edificio]);
    const [pisos] = await pool.query(pisosQuery);

    if (edificio.length === 0) {
      return res.status(404).json({ message: 'Edificio no encontrado' });
    }

    res.json({
      edificio: edificio[0],
      pisos: pisos 
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el edificio y sus pisos');
  }
};

export { obtenerPisosPorEdificio };
