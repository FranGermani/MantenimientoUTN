import { Router } from 'express';
import { getOrdenTrabajo, getDetallesOrdenTrabajo, nuevaODT } from '../controllers/ordenTrabajo.controller.js';

const router = Router();

router.get('/orden_trabajo', getOrdenTrabajo);
router.get('/detalle_orden_trabajo/:id', getDetallesOrdenTrabajo);
router.post('/nuevaODT', nuevaODT);


export default router;