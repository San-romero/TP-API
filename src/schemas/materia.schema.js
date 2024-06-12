const Joi = require("joi")


const materiaSchema= Joi.object().keys(
    {
        nombre: Joi.string().required().messages({
            "string.empty":"Nombre no puede estar vacio",
            "any.required": " El nombre es requerido"
        }),
        cuatrimestral: Joi.number().min(1).required().messages({
            "any.required": " Cuatrimestral es requerido",
            "number.min": "El año debe ser como mínimo {#limit}"
            
        }),
        anio: Joi.number().min(1).required().messages({
            "number.min": "El año debe ser como mínimo {#limit}",
            "any.required": "El año es requerido"
        })

    }
)

module.exports = materiaSchema