import { pool } from '../../config/db.js';

// Obtener todos los edificios
export const getEdificios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener edificios', error: err.message });
    }
};

// Crear un nuevo edificio
export const createEdificio = async (req, res) => {
    const { nombre, direccion, labeltag, activo } = req.body; // Asegúrate de que estos campos están bien

    console.log('Datos recibidos para crear edificio:', req.body); // Agrega esta línea

    try {
        const [result] = await pool.query(
            'INSERT INTO edificio (nombre, direccion, labeltag, activo) VALUES (?, ?, ?, ?)',
            [nombre, direccion, labeltag, activo]
        );

        res.status(201).json({ id: result.insertId, nombre, direccion, labeltag, activo });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al crear edificio', error: err.message });
    }
};


// Eliminar un edificio
export const deleteEdificio = async (req, res) => {
    const { id } = req.params; // ID del edificio a eliminar

    try {
        const [result] = await pool.query('DELETE FROM edificio WHERE id_edificio = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Edificio no encontrado' });
        }

        res.json({ message: 'Edificio eliminado' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al eliminar edificio', error: err.message });
    }
};



export const updateLabelTag = async (req, res) => {
    const { id } = req.params;
    const { labeltag } = req.body;
  
    try {
      await pool.query(
        'UPDATE edificio SET labeltag = ? WHERE id_edificio = ?',
        [labeltag, id]
      );
  
      res.status(200).json({ message: 'Label tag actualizado' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al actualizar el label tag', error: err.message });
    }
  };

  export const updateEdificio = async (req, res) => {
    const { id_edificio } = req.params; // Esto debería recibir el parámetro correctamente
    const { nombre, direccion, labeltag, activo } = req.body;

    console.log('ID del edificio que se intenta actualizar:', id_edificio); // Asegúrate de que esto no sea undefined

    try {
        const [result] = await pool.query(
            'UPDATE edificio SET nombre = ?, direccion = ?, labeltag = ?, activo = ? WHERE id_edificio = ?',
            [nombre, direccion, labeltag, activo, id_edificio]
        );

        console.log('Resultado de la actualización:', result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Edificio no encontrado' });
        }

        res.json({ id_edificio, nombre, direccion, labeltag, activo });
    } catch (err) {
        console.error('Error al actualizar el edificio:', err);
        res.status(500).json({ message: 'Error al actualizar edificio', error: err.message });
    }
};

  



