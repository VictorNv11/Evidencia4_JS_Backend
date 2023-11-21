const express = require('express')
const Bootcamp = require('../models/bootcampsModel')
const mongoose = require('mongoose')
//DEFINIR RUTEADOR DE BOOTCAMP

const router = express.Router()

//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS

//1 SELECCIONAR TODOS LOS BOOTCAMPS
router.get(('/'),
           async (req, res ) =>{
            //trar los bootcamps en bd
            const bootcamps =  await Bootcamp.find()
            //esenario: no hay bootcamps en mongo
            if(bootcamps.length >0 ){
                //hay bootcamps en mongo
                res.
                status(200).
                json({
                    success: true,
                    data: bootcamps
                })
            }else{
                //no hay bootcamps en mongo
                res.
                status(404).
                json({
                    success: false,
                    msg: "No hay bootcamps"
                })
            }    
          })

//2 SELECCIONA EL BOOTCAMP CUYO ID SE PASE POR UN PARA METRO    
router.get('/:id', 
            async (req , res) =>{
            const bootcmapId = req.params.id;
            try{
                //escenario bootcamp invalido
                if(!mongoose.Types.ObjectId.isValid(bootcmapId)){
                    //no hay bootcamps en la bd
                    return res.status(500).json({
                        success: false,
                        msg: `id invalido`
                    })
                }
                else{
                    const bootcamp = await Bootcamp.findById(bootcmapId)
                    console.log(bootcamp)
                    if(!bootcamp){
                        //si no hay bootcamp
                        res.status(404).json(
                            {
                                success:false,
                                msg:"bootcamp no encontrado"
                            }
                        )
                    }else{
                        return res.status(200).json(
                            {
                                success: true,
                                data:bootcamp
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




//3 Crear bootamp
router.post(('/'),
          async (request, response ) =>{
            try{
            //guardar el bootcamp que viene en el body
            const newBootcamp = await Bootcamp.create(request.body)

                return response.status(201).json({
                    success: true,
                    data: newBootcamp
                })}
                catch (error){
                    response.status(500).json({
                        success: false,
                        msg:`Error Encontrado: ${error.message}`,})

                }
          })

 //4 Actualizar bootcamp por id    
router.put('/:id', 
    async (req , res) =>{
        const bootcmapId = req.params.id;
            try{
                //escenario bootcamp invalido
                if(!mongoose.Types.ObjectId.isValid(bootcmapId)){
                    //no hay bootcamps en la bd
                    return res.status(500).json({
                        success: false,
                        msg: `id invalido`
                    })
                }
                else{
                    const bootcamp = await Bootcamp.findByIdAndUpdate
                    (bootcmapId, 
                        req.body,
                        {
                         new:true,
                        })
                    console.log(bootcamp)   
                    if(!bootcamp){
                        //si no hay bootcamp
                        res.status(404).json(
                            {
                                success:false,
                                msg:"bootcamp no encontrado"
                            }
                        )
                    }else{
                        return res.status(200).json(
                            {
                                success: true,
                                data:bootcamp
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
            bootcampId = req.params.id
            await Bootcamp.findByIdAndDelete(bootcampId)
             return res.json(    
            {
                success: true,
               data:[]
             }
            )   
        })
module.exports = router