const express = require("express")
const mainRouter = require("./src/routers/mainRouter")
const categoriesRouter = require("./src/routers/categoriesRouter")
const usersRouter = require("./src/routers/usersRouter")
const productsRouter = require("./src/routers/productsRouter")
const app = express()
const session = require("express-session")
const userLoggedInMiddleware = require("./src/middlewares/userLoggedInMiddleware")

app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: false}))
app.use(
    session({
        secret:"sessionGeneral",
        resave:false,
        saveUninitialized:false,
    })
);
app.use(userLoggedInMiddleware)
app.use(mainRouter)
app.use(categoriesRouter)
app.use(usersRouter)
app.use(productsRouter)

app.set("view engine", "ejs")
app.set("views", __dirname + "/src/views")

const PORT = process.env.port || 3012
app.listen(PORT, console.log(`running server on port ${PORT}`))