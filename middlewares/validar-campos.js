const { validationResult } = require('express-validator')
const validarCampos=(req,res,next)=>{
    const erroresDeValidacion=validationResult(req) 
    if(!erroresDeValidacion.isEmpty()){
        return res.status(400).json(
            erroresDeValidacion,
           
           )
    }
    next(); 
}
module.exports=validarCampos