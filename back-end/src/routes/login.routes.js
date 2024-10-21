import { Router } from "express";
import { login, registro, verifyToken, protect } from '../controllers/login.controller.js'; // Importar todas las funciones una sola vez

const router = Router();

router.post('/registro', registro); // Ruta para registrar un nuevo usuario
router.post('/login', login); // Ruta para iniciar sesión
router.get('/protected', verifyToken, protect); // Ruta protegida

export default router;
