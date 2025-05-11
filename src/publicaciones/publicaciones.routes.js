import { Router } from 'express';
import { crearPulicacion, listarPublicaciones, eliminarPublicacion } from './publicaciones.controller.js';
import { crearPublicacionesValidator, listarPublicacionesValidator, eliminarPublicacionesValidator } from '../middlewares/publicaciones-validator.js';

const router = Router();

router.post('/crearPublicaciones', crearPublicacionesValidator, crearPulicacion);

router.get('/', listarPublicacionesValidator, listarPublicaciones);

router.delete('/eliminarPublicaciones/:id', eliminarPublicacionesValidator, eliminarPublicacion);

export default router;