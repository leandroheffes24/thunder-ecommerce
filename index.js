const express = require("express")
const mainRouter = require("./src/routers/mainRouter")
const categoriesRouter = require("./src/routers/categoriesRouter")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(mainRouter)
app.use(categoriesRouter)

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

const PORT = process.env.port || 3012
app.listen(PORT, console.log(`running server on port ${PORT}`))