import { Schema, model } from 'mongoose';

const publicacionesSchema = new Schema({
    titulo:{
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    curso:{
        type: String,
        required: true,
        enum: ['TALLER', 'PRACTICA_SUPERVISADA', 'TECNOLOGIA']
    },
    texto:{
        type: String,
        required: [true, 'El texto es obligatorio'],
        maxLength: [5000, 'EL texto debe de contener como maximo 5000 caracteres']   
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    estado:{
        type: Boolean,
        default: true
    },
    comentarios:[{
        type: Schema.Types.ObjectId,
        ref: "Comentarios"
    }]
},{
    versionKey: false,
    timestamps: true
})

export default model('Publicaciones', publicacionesSchema)