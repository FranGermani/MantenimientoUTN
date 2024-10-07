import { Router } from "express";
import {getEdificio, getEdificios, createEdificio, updateEdificio, deleteEdificio} from '../controllers/edificios.controller.js'

const router = Router()

router.get('/edificios', getEdificios)

router.get('/edificios/:id', getEdificio)

router.post('/edificios', createEdificio)

router.put('/edificios', updateEdificio)

router.delete('/edificios', deleteEdificio)

export default router