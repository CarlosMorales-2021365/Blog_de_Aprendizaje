import Publicaciones from './publicaciones.model.js';

export const crearPulicacion = async (req, res) => {
    try{
        const { titulo, curso, texto } = req.body;

        const publicaciones = new Publicaciones({titulo, curso, texto});
        await publicaciones.save();
    
        return res.status(201).json({
            success: true,
            msg: 'La publicacion fue creada exitosamente',
            publicaciones
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            msg: 'Error al crear la publicacion',
            error
        })
    }
    
}