import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { comentarioExists } from "../helpers/db-validators.js";

export const crearComentarioValidator = [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("textoC").notEmpty().withMessage("El texto es requerido"),
    body("publicaciones").notEmpty().withMessage("La publicacion es oblif¿gatoria"),
    body("publicaciones").isMongoId().withMessage("No es un ID valido"),
    validarCampos,
    handleErrors
]

export const listarComentariosValidator = [
    validarCampos,
    handleErrors
]

export const eliminarComentariosValidator = [
    param("id").isMongoId().withMessage("No es un ID válido"),
    param("id").custom(comentarioExists),
    validarCampos,
    handleErrors
]