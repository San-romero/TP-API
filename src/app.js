const express = require("express")
const Route= require("./routes/route")

const PORT= process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(Route)


app.listen(PORT,()=>{
  console.log(`Servisor corriendo en el puerto ${PORT}`)
})
