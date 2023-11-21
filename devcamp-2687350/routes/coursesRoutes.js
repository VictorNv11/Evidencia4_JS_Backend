const express = require('express')
const Courses = require('../models/coursesModel')
const mongoose = require('mongoose')
//DEFINIR RUTEADOR DE CURSOS    

const router = express.Router()

//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS

//1 SELECCIONAR TODOS LOS CURSOS
router.get(('/'),
            async (req, res ) =>{
               const courses =await Courses.find()
               if(courses.length >0 ){
                //hay cursos en mongo
                res.
                status(200).
                json({
                    success: true,
                    data: courses
                })
            }else{
                //no hay cursos en mongo
                res.
                status(404).
                json({
                    success: false,
                    msg: "No hay cursos"
                })
            }    
          })

//2 SELECCIONA EL CURSO CUYO ID SE PASE POR UN PARA METRO    

router.get('/:id', 
         async (req , res) =>{
            const cursoId = req.params.id
            try{
                //escenario cursos invalido
                if(!mongoose.Types.ObjectId.isValid(cursoId)){
                    //no hay cursos en la bd
                    return res.status(500).json({
                        success: false,
                        msg: `id invalido`
                    })
                }
                else{
                    const courses = await Courses.findById(cursoId)
                    console.log(courses)
                    if(!courses){
                        //si no hay cursos
                        res.status(404).json(
                            {
                                success:false,
                                msg:"curso no encontrado"
                            }
                        )
                    }else{
                        return res.status(200).json(
                            {
                                success: true,
                                data:courses
                            })
                    }
                }
            } catch (error){
                res.status(500).json({
                    success: false , 
                    msg: error.message
                })
            }
        })

//3 Crear curso
router.post(('/'),
           async (req, res ) =>{
            try{
                const newCourses = await Courses.create(req.body)    
                return res.status(201).json({
                    success: true,
                    data: newCourses        
                })}
                catch (error){
                    res.status(500).json({
                        success: false,
                        msg:`Error Encontrado: ${error.message}`,})

                }
        
          })

          //4 Actualizar curso por id    
router.put('/:id', 
    async(req , res) =>{
        const cursosId = req.params.id;
        try{
            //escenario curso invalido
            if(!mongoose.Types.ObjectId.isValid(cursosId)){
                //no hay curso en la bd
                return res.status(500).json({
                    success: false,
                    msg: `id invalido`
                })
            }
            else{
                const courses = await Courses.findByIdAndUpdate
                (cursosId, 
                    req.body,
                    {
                     new:true,
                    })
                console.log(courses)   
                if(!courses){
                    //si no hay curso
                    res.status(404).json(
                        {
                            success:false,
                            msg:"curso no encontrado"
                        }
                    )
                }else{
                    return res.status(200).json(
                        {
                            success: true,
                            data:courses
                        })
                }
            }
        } catch (error){
            res.status(500).json({
                success: false , 
                msg: error.message
            })
        }
})

//5. borrar  
router.delete('/:id', 
         async (req , res) =>{
            cursosId = req.params.id
            await Courses.findByIdAndDelete(cursosId)
             return res.json(
            {
                success: true,
               data:[]
             }
            )   
        })
module.exports = router
