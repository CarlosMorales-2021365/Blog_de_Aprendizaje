import Publicaciones from "../publicaciones/publicaciones.model.js"

export const publicacionExists = async (id = " ") => {
    const existe = await Publicaciones.findById(id)
    if(!existe){
        throw new Error("No existe la publicacion con el ID proporcionado")
    }
}
