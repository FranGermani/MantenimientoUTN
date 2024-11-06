import { Router } from 'express';
import { getTiposOrden } from '../controllers/tipoOrden.controller.js';  // Asegúrate de que la ruta sea correcta


const router = Router();

router.get('/tiposOrden', getTiposOrden);

export default router;
