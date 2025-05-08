import { Router } from "express"
import { crearComentario, listarComentarios } from "./comentarios.contoller.js"
import { crearComentarioValidator, listarComentariosValidator } from "../middlewares/comentarios-validators.js"

const router = Router()

router.post("/crearComentarios", crearComentarioValidator, crearComentario);

router.get("/listarComentarios", listarComentariosValidator, listarComentarios);

export default router;