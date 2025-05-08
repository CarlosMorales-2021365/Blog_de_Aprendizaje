import Comentarios from "../comentarios/comentarios.model.js"
import Publicaciones from "../publicaciones/publicaciones.model.js"

export const crearComentario = async (req, res) => {
    try{
        const { nombre, textoC, publicaciones } =req.body

        const opinion = new Comentarios ({
            nombre,
            textoC,
            publicaciones
        });

        await opinion.save();

        await Publicaciones.findByIdAndUpdate(
            publicaciones,
            { $push: { comentarios: opinion._id }},
            {new: true}
        );

        const comentarioCompleto = await Comentarios.findById(opinion._id)
        .populate('publicaciones', 'titulo');

        return res.status(200).json({
            success: true,
            message: "Comentario creado correctamente",
            opinion: comentarioCompleto
        });
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al crear el comentario",
            error: err.message
        });
    }
}