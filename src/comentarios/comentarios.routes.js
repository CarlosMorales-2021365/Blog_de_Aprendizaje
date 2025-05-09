import { Router } from "express"
import { crearComentario, listarComentarios, eliminarComentario } from "./comentarios.contoller.js"
import { crearComentarioValidator, listarComentariosValidator,eliminarComentariosValidator } from "../middlewares/comentarios-validators.js"

const router = Router()

router.post("/crearComentarios", crearComentarioValidator, crearComentario);

router.get("/listarComentarios", listarComentariosValidator, listarComentarios);

router.delete("/eliminarComentarios/:id", eliminarComentariosValidator, eliminarComentario)

export default router;