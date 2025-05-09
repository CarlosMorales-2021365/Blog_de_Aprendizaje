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

export const listarComentarios = async (req, res) => {
    try{
        const query = {estado: true };

        const [total, comentarios] = await Promise.all([
            Comentarios.countDocuments(query),
            Comentarios.find(query)
        ]);

        return res.status(200).json({
            success: true,
            total,
            comentarios,
            message: comentarios.lenght === 0 ? 'No se encontraron comentarios': undefined
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar Los comentarios",
            error: err.message
        });
    }
}

export const eliminarComentario = async (req, res) => {
    try{
    const { id } = req.params

     const comentario = await Comentarios.findById(id);
     if (!comentario) {
            return res.status(404).json({
                success: false,
                message: "El comentario no existe"
            });
        }

      await Publicaciones.findByIdAndUpdate(
            comentario.publicaciones,
            { $pull: { comentarios: id } }
        );

        const comentarioEliminado = await Comentarios.findByIdAndUpdate(id, {estado: false}, {new: true})

    return res.status(200).json({
            success: true,
            message: "Comentario eliminado",
            comentarioEliminado
        })
        }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al eliminar el comentario",
            error: err.message
        })
    }
}