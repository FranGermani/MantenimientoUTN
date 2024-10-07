import { pool } from '../db.js'

export const getEdificios = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM edificio')
    res.json(rows)
}

export const getEdificio = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Edificio no encontrado'
    })

    res.json(rows[0])
}

export const createEdificio = (req, res) => res.send('creando empoloyis')

export const updateEdificio = (req, res) => res.send('actualizando empoloyis')

export const deleteEdificio = (req, res) => res.send('eliminando empoloyis')