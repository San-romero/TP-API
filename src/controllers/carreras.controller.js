const carreras = require("../../data/data.json")


const getAllCarreras =(req,res) => {
    res.status(200).json(carreras)
}

const getCarreraById=(req,res) =>{
    const id=req.params.id
    const carrera= carreras.find( carreras=> carreras.id == id)
    res.status(200).json(carrera)
}

const getMateriaByCarrera=(req,res)=>{
    const id=req.params.id
    const carrera= carreras.find( carreras=> carreras.id == id)
    res.status(200).json(carrera.materias)
}

const crearCarrera=(req,res)=>{
    const ca=req.body
    let id=1
    if(carreras.length) {
        const ids = carreras.map ( c => c.id )
        id = Math.max(...ids) + 1
    }
    
    carreras.push( {id, ...ca})
    res.status(201).json(carreras[carreras.length-1])
}

const borrarCarrera=(req,res)=>{
    const id =req.params.id
    const idx= carreras.findIndex((c)=> c.id == id);
    if(idx >=0){
        const borrado= carreras.splice(idx,1);
        res.status(200).json({mensaje:`el id ${id} fue borrado`, objeto: borrado[0]});
    }
}

module.exports ={getAllCarreras,getCarreraById,crearCarrera,getMateriaByCarrera,borrarCarrera, carreras}