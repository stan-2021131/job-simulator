import { Router } from 'express';
import { obtenerVideojuegos, obtenerXId, nuevoVideojuego, actualizarVideojuego, eliminarVideojuego, patch } from '../controller/controller.js';
const router = Router();

router.get('/', obtenerVideojuegos);
router.get("/:id", obtenerXId);
router.post("/", nuevoVideojuego);
router.put("/:id", actualizarVideojuego);
router.delete("/:id", eliminarVideojuego);
router.patch("/:id", patch)

export default router;