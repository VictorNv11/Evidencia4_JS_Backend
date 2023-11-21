const mongoose = require ('mongoose')

const CoursesSchema=mongoose.Schema({
    title:{
        type: String,
        required: [true,
        "El titulo es requerido"],
        unique: true,
        maxlength: [50, "Titulo de curso no mayor"]
    },
    description:{
        type: String,
        required: [true,
        "La descripcion es requerida"],
        unique: true,
        maxlength: [70, "Descipcion no mayor"]
    },
    weeks:{
        type: Number,
        required: [true,
        "EL numero es requerido"],
        maxlength: [20, "Semanas"]
    },
    tuiton:{
        type: Number,
        required: [true,
        "La matricula de curso es requerida"]
    },
    minimunSkills:{
        type: String,
        required:[true, " las skill son requeridas"],
        enum:["Beginner", " Itermediate", "Advanced"]
    },
    averageRating: Number,
})
module.exports=mongoose.model('Courses',CoursesSchema)