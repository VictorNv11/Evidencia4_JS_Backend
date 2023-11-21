const express = require('express')
const dotenv = require('dotenv')
const colors = require ('colors')
const connectBD = require('./config/db')


const bootcapsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
//const reviewsRoutes = require('./routes/reviewsRoutes')
//const userRoutes = require('./routes/userRoutes')
//establecer config
dotenv.config({
    path: './config/.env'})
   
//crear el objeto express
const app = express()
//Dependecia de formate de 
app.use(express.json())

//EJECUTAR COEION A BASE DE DATOS
connectBD()


//___________ROUTER_________________
app.use('/bootcamps', bootcapsRoutes)
app.use('/courses',coursesRoutes)
//app.use('/reviews', reviewsRoutes)
//app.use('user', userRoutes)




//url de prueba:
app.get('/prueba', (request, response ) =>{

    //EJEEMPLO DE RESPONSE BASICO
    response.send("Hola")
})


//definir puerto de servidor
const puerto = process.env.PUERTO

//definit servidor
app.listen( puerto ,
            console.log(`servidor ejecutando en ${ puerto }`.bgBlue))







