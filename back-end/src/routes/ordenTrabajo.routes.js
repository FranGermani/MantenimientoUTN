import { Router } from 'express';
import { getOrdenTrabajo, getDetallesOrdenTrabajo, nuevaODT, deleteOrdenTrabajo, getConcatenacionIds } from '../controllers/ordenTrabajo.controller.js';

const router = Router();

router.get('/orden_trabajo', getOrdenTrabajo);
router.get('/detalle_orden_trabajo/:id', getDetallesOrdenTrabajo);
router.post('/nuevaODT', nuevaODT);
router.delete('/orden_trabajo/:id', deleteOrdenTrabajo);
router.get('/orden-trabajo/:id/concatenacion', getConcatenacionIds);



export default router;
