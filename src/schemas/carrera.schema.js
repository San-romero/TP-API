const Joi = require("joi")
const materiaSchema= require("../schemas/materia.schema")

const carreraSchema = Joi.object().keys(
    {
        nombre: Joi.string().required().messages({
           "string.empty":"Nombre no puede estar vacio",
           "any.required": " El nombre es requerido"
       }),
       grado: Joi.number().required().messages({
           "any.required": " El grado es requerido"
       }),
       universidad: Joi.string().required().messages({
           "string.empty":"Universidad no puede estar vacio",
           "any.required": " Universidad es requerido"
       }),
       materias : Joi.array().items(materiaSchema).required().messages({
        "any.required": "Las materias son requeridas"
       })
    }
)

module.exports= carreraSchema;