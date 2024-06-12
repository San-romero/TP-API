const {m} =require("../controllers/materia.controller")

const validaMateriaById = (req,res,next) =>{
    const id= req.params.id
    const ma= m.flatMap(m=>m.materias)
    const materia = ma.find(m => m.id == id); // Busca la materia por su ID en la lista de todas las materias
    if (!materia) {
        return res.status(404).json({ error: `No se encontró la materia con el ID ${id}` });
    }
    next()
}

module.exports= {validaMateriaById}