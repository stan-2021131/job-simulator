import { Router } from 'express';
import { obtenerVideojuegos, obtenerXId, nuevoVideojuego } from '../controller/controller.js';
const router = Router();

router.get('/', obtenerVideojuegos);
router.get("/:id", obtenerXId);
router.post("/", nuevoVideojuego);

export default router;