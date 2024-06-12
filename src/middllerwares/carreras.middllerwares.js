const {carreras} =require("../controllers/carreras.controller")


const validaCarreraById = (req,res,next) =>{
    const id= req.params.id
    const idx= carreras.findIndex( carreras=> carreras.id == id)
    if(idx <0){
        res.status(404).json({
            error: `No se encuentra la carrera con el id ${id}`
        })
    }
    next()
}

module.exports= {validaCarreraById}