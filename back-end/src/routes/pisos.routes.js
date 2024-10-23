// routes/pisoRoutes.js
import express from 'express';
import { getPisos, createPiso, deletePiso } from '../controllers/pisos.controller.js'; // Asegúrate de que la ruta sea correcta

const router = express.Router();

// Ruta para obtener todos los pisos
router.get('/pisos', getPisos);
router.post('/pisos', createPiso); // Crear un nuevo piso
router.delete('/pisos/:id', deletePiso); // Eliminar un piso por ID


// Aquí puedes agregar más rutas para crear, actualizar y eliminar pisos

export default router;
