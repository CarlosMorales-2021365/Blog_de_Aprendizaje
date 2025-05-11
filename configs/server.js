"use strict"

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnection } from "./mongo.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import publicacionesRoutes from "../src/publicaciones/publicaciones.routes.js"
import comentariosRoutes from "../src/comentarios/comentarios.routes.js"

const middelwares = (app) =>{
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) => {
    app.use("/blogDeAprendizaje/v1/publicaciones", publicacionesRoutes)
    app.use("/blogDeAprendizaje/v1/comentarios", comentariosRoutes)
}

const connectarDB = async () =>{
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

export const initServer = () => {
    const app = express()
    try{
        middelwares(app)
        connectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on a port  ${process.env.PORT}`)
    }catch(err){
        console.log(`sever init failed: ${err}`)
    }  
}