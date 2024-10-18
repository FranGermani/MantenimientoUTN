import express from "express";
import { getTareas } from "../controllers/tareas.controller.js";

const router = express.Router();


router.get('/tareas', getTareas);

export default router;
