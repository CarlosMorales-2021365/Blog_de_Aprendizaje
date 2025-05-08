import { Router } from 'express';
import { crearPulicacion, listarPublicaciones } from './publicaciones.controller.js';
import { crearPublicacionesValidator, listarPublicacionesValidator } from '../middlewares/publicaciones-validator.js';

const router = Router();

router.post('/crearPublicaciones', crearPublicacionesValidator, crearPulicacion);

router.get('/', listarPublicacionesValidator, listarPublicaciones);

export default router;