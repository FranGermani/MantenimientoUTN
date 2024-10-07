import express from 'express';
import { getSectores } from '../controllers/sector.controller.js'; 

const router = express.Router();

router.get('/sector', getSectores); 

export default router;
