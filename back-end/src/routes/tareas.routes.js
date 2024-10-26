import express from "express";
import { getTareas, createTarea, deleteTarea } from "../controllers/tareas.controller.js";

const router = express.Router();

router.get('/tareas', getTareas);
router.post('/tareas', createTarea);
router.delete('/tareas/:id_tarea', deleteTarea);

export default router;
