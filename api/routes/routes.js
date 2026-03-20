import { Router } from 'express';
import { obtenerVideojuegos, obtenerXId, nuevoVideojuego, actualizarVideojuego } from '../controller/controller.js';
const router = Router();

router.get('/', obtenerVideojuegos);
router.get("/:id", obtenerXId);
router.post("/", nuevoVideojuego);
router.put("/:id", actualizarVideojuego);

export default router;