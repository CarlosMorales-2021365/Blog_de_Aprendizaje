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

export const listarPublicaciones = async (req, res) => {
    try{
        const query = {estado: true };
        
        const [total, publicaciones] = await Promise.all([
            Publicaciones.countDocuments(query),
            Publicaciones.find(query)
        ]);

        return res.status(200).json({
            success: true,
            total,
            publicaciones,
            message: publicaciones.lenght === 0 ? 'No se encontraron publicaciones activas': undefined
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: 'Error al obtener las publicaciones',
            error: err.message
        });
    }
}