import { Router } from "express";
import { login, registro, logout, verifyToken, protect } from '../controllers/login.controller.js';

const router = Router();

router.post('/registro', registro);
router.post('/login', login);
router.post('/logout', logout);
router.get('/protected', verifyToken, protect);

export default router;
