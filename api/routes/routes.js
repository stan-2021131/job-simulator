import { Router } from 'express';
import { obtenerVideojuegos, obtenerXId } from '../controller/controller.js';
const router = Router();

router.get('/', obtenerVideojuegos);
router.get("/:id", obtenerXId);


export default router;