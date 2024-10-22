import express from 'express';
import { getUsers, updateUser, deleteUser } from '../controllers/usuario.controller.js';
import { registro } from '../controllers/login.controller.js';

const router = express.Router();

router.get('/usuarios', getUsers);

router.post('/usuarios', registro);

router.put('/usuarios/:id', updateUser);

router.delete('/usuarios/:id', deleteUser);

export default router;
