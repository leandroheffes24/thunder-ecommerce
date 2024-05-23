const express = require("express")
const mainRouter = require("./src/routers/mainRouter")
const categoriesRouter = require("./src/routers/categoriesRouter")
const usersRouter = require("./src/routers/usersRouter")
const app = express()
const session = require("express-session")

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: false}))
app.use(
    session({
        secret:"sessionGeneral",
        resave:false,
        saveUninitialized:false,
    })
);
app.use(mainRouter)
app.use(categoriesRouter)
app.use(usersRouter)

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

const PORT = process.env.port || 3012
app.listen(PORT, console.log(`running server on port ${PORT}`))