const colors = require('colors');
const mongoose = require('mongoose');


//FUNCION PARA ONECTARSE A LA BASE DE DATOS
async function  connectBD(){
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`conexion exitosa a mongoDB${ conn.connection.host}`.bgCyan.green);
}

module.exports = connectBD