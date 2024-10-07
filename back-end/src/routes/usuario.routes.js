import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/usuario.controller.js';

const router = express.Router();

router.get('/usuarios', getUsers);

router.post('/usuarios', createUser);

router.put('/usuarios/:id', updateUser);

router.delete('/usuarios/:id', deleteUser);

export default router;
