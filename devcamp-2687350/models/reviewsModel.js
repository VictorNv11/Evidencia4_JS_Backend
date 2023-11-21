const mongoose = require('mongoose')

const BootcampsSchema=mongoose.Schema({
    title:{
        type: String,
        required:[ true,
            "El titulo es requerido"],
        unique: true,
        maxlength: [20, "Un titulo no mayor"]
    },
    comment:{
        type: String,
        required:[true,
             "el comentario es requerido"],
        unique: true,
        maxlength:[50, "Un comentario mas corto"]
    },
    rating:{
        type: Number,
        required:[ true,
            "La clasificacion es requerida"],
        unique: true,
        maxlength:[100, "Clasificacion no mayor"]
    }
})