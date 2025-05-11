import Publicaciones from "../publicaciones/publicaciones.model.js"
import Comentarios from "../comentarios/comentarios.model.js";

export const publicacionExists = async (id = " ") => {
    const existe = await Publicaciones.findById(id)
    if(!existe){
        throw new Error("No existe la publicacion con el ID proporcionado")
    }
}


export const comentarioExists = async (id = " ") => {
    const existe = await Comentarios.findById(id)
    if(!existe){
        throw new Error("No existe el comentario con el ID proporcionado")
    }
}