import express from 'express';
import { getPisos } from '../controllers/pisos.controller.js'; 

const router = express.Router();

router.get('/pisos', getPisos);

export default router;
