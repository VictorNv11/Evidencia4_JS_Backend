const express = require('express')
//DEFINIR RUTEADOR DE CURSOS    
const router = express.Router()
//UTILIZAR EL RUTEADOR PARA CREAR LAS RUTAS

//------------------------------USERS------------------------------//

//1 SELECCIONAR TODOS LOS USERS
router.get(('/user'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "seleccionando todos los users"
      })
})

//2 SELECCIONA EL USER CUYO ID SE PASE POR UN PARA METRO    

router.get('/user/:id', 
        (req , res) =>{
            userId = req.params.id
             return res.json({
                success: true,
                msg: `seleccionando user cuyo i es: ${userId}`
             }
            )   
        })

 //3 CREAR USER 
router.post(('/user'),
(req, res ) =>{
      return res.json({
          success: true,
          msg: "Crear nuevo user"
      })
})

//4 Actualizar USER por id    
router.put('/user/:id', 
(req , res) =>{
    userId = req.params.id
     return res.json({
        success: true,
        msg: `Actualizando user cuyo id es:  ${userId}`
     }
    )   
})

//5. borrar USER POR ID  
router.delete('/user/:id', 
        (req , res) =>{
            userId = req.params.id
             return res.json({
                success: true,
                msg: `eliminando user cuyo id es: ${userId}`
             }
            )   
        })

 module.exports = router