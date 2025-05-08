import { Router } from 'express';
import { crearPulicacion } from './publicaciones.controller.js';
import { crearPublicacionesValidator } from '../middlewares/publicaciones-validator.js';

const router = Router();

router.post('/crearPublicaciones', crearPublicacionesValidator, crearPulicacion);

export default router;