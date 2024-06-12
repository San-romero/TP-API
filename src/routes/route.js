const {Router}= require("express")
//controllers
const controllerM= require("../controllers/materia.controller")
const controllerC= require("../controllers/carreras.controller")
//middllerwares
const middlerwaresM =require("../middllerwares/materia.middlerwares")
const middlerwaresC =require("../middllerwares/carreras.middllerwares")
//schemas
const schemaM = require("../schemas/materia.schema")
const schemaC =require("../schemas/carrera.schema")
const schemaValidator = require("../middllerwares/schemaValidator")
const route = Router()

route.get("/carreras", controllerC.getAllCarreras)
route.get("/carreras/:id",middlerwaresC.validaCarreraById,controllerC.getCarreraById)
route.post("/carreras", schemaValidator(schemaC),controllerC.crearCarrera)
route.delete("/carreras/:id",middlerwaresC.validaCarreraById,controllerC.borrarCarrera)
route.post("/carreras/:id/materias",schemaValidator(schemaM),middlerwaresC.validaCarreraById,controllerM.crearMateria)
route.get("/carreras/:id/materias",middlerwaresC.validaCarreraById, controllerC.getMateriaByCarrera)
route.get("/materias", controllerM.getAllMateria)
route.get("/materias/:id",middlerwaresM.validaMateriaById,controllerM.getMateriaById)
route.delete("/materias/:id",middlerwaresM.validaMateriaById,controllerM.borrarMateria)

module.exports = route