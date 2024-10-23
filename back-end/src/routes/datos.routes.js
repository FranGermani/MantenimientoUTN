// En tu archivo de rutas (routes):
import { getOperarios, getEdificios, getPisos, getSectores  } from '../controllers/datos.controller.js';

router.get('/operarios', getOperarios);
router.get('/edificios', getEdificios);
router.get('/pisos', getPisos);
router.get('/sectores', getSectores);
