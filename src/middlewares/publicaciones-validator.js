import { body, param } from "express-validator";
import { validarCampos } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const crearPublicacionesValidator = [
    body('titulo').notEmpty().withMessage('El titulo es obligatorio'),
    body('curso').notEmpty().withMessage('El curso es obligatorio'),
    body('texto').notEmpty().withMessage('El texto es obligatorio'),
    validarCampos,
    handleErrors
]