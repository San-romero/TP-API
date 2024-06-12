# Taller de Programación - TP 2024 - UNPAZ
Este trabajo práctico tiene como objetivo principal en la implementación de una API REST utilizando un framework muy utilizado en la industria del sofware como es express.js

# Integrantes
- Romero Sandra

# ¿Como utilizar la API?

## Instalacion Previa
- Visual Studio Code
- Node.js

## pasos de instalacion y ejecucion
- Abrir Visula Studio Code desde la carpeta de la Api
- Abrir una nueva terminal en VSC
- Instalar las dependencias de produccion y desarrollo 
```
npm i express joi
npm i -D nodemon
```
- Para ejecutar el proyecto debera escribir el siguiente comando
```
npm run dev
```
- En el archivo se encontrar una coleccion que permite probar las funciones de la API

# Modelo implementado
Basado en el siguiente diagrama se genero los datos y relaciones necesarios para que la API pueda interactuar 

![DER](DER.png)

# Ejemplo del JSON de datos
```

    {
        "id": ,
        "nombre":"",
        "grado": ,
        "universidad":"",
        "materias":[
            {
            "id": ,
            "nombre":"",
            "cuatrimestral":,
            "anio":,
            "carreraId":
            }
        ]
    }

```
