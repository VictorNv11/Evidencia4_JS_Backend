const express = require('express')
//DEFINIR RUTEADOR DE CURSOS    
const router = express.Router()
//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS


//--------------------------------REVIEW------------------------------------//

//1 SELECCIONAR TODOS LOS REVIEWS
router.get(('/review'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "seleccionano todos las review"
      })
})

//2 SELECCIONA EL REVIEW CUYO ID SE PASE POR UN PARA METRO    

router.get('/review/:id', 
        (req , res) =>{
            reviewId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando curso cuyo i es: ${reviewId}`
             }
            )   
        })

 //3 Crear REVIEW
router.post(('/review'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "Crear review"
      })
})

//4 Actualizar review por id    
router.put('/review/:id', 
(req , res) =>{
    reviewId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando review cuyo id es:  ${reviewId}`
     }
    )   
})

//5. borrar REWVIEW
router.delete('/review/:id', 
        (req , res) =>{
            reviewId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando review cuyo id es: ${reviewId}`
             }
            )   
        })

s
