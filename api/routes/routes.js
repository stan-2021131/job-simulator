import { Router } from 'express';
import { obtenerVideojuegos } from '../controller/controller.js';
const router = Router();

router.get('/', obtenerVideojuegos);


export default router;