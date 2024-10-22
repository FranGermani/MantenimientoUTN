import { Router } from "express";
import { login, registro, verifyToken, protect } from '../controllers/login.controller.js';

const router = Router();

router.post('/registro', registro); 
router.post('/login', login);
router.get('/protected', verifyToken, protect);

export default router;
