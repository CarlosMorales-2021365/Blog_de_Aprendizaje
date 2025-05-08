import { Router } from "express"
import { crearComentario } from "./comentarios.contoller.js"
import { crearComentarioValidator } from "../middlewares/comentarios-validators.js"

const router = Router()

router.post("/crearComentarios", crearComentarioValidator, crearComentario);

export default router;