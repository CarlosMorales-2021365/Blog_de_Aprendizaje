import { Schema, model } from "mongoose";

const comentariosSchema = Schema({
    publicaciones:{
        type: Schema.ObjectId,
        ref: 'Publicaciones',
        require: true
    },
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    textoC:{
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
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model('Comentarios', comentariosSchema)