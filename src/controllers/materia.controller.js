const m = require("../../data/data.json")

const getAllMateria =(req,res)=>{
    const materias= m.map(m=>m.materias)
    res.status(200).json(materias)
}

const getMateriaById=(req,res) =>{
    const id=req.params.id
    const ma= m.flatMap(m=>m.materias)
    const materia=ma.find( m=> m.id == id)
    res.status(200).json(materia)
}

const crearMateria=(req,res)=>{
    const carreraId=parseInt(req.params.id)
    const ma=req.body
    let id=1
    const materia = m.find(m=> m.id === carreraId)
    if(materia.materias.length > 0) {
        const ids = materia.materias.map( m => m.id )
        id = Math.max(...ids) + 1
    }
 
    materia.materias.push( {id,...ma,carreraId})
    res.status(201).json(materia.materias[materia.materias.length-1])
}
const borrarMateria=(req,res)=>{
    const id =req.params.id
    const ma= m.flatMap(m=>m.materias)
    const idx= ma.findIndex((m)=> m.id == id);
    if(idx >=0){
        const borrado= ma.splice(idx,1);
        res.status(200).json({mensaje:`el id ${id} fue borrado`, objeto: borrado[0]});
    }
}

module.exports={getAllMateria,getMateriaById,crearMateria,borrarMateria,m}