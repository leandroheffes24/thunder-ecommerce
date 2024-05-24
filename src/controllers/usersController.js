const {v4: uuidv4} = require("uuid")
const bcrypt = require("bcryptjs")
const {validationResult} = require("express-validator")
const usersServices = require("../services/usersServices")

module.exports = {
    login: (req, res) => {
        return res.render("login")
    },

    register: (req, res) => {
        return res.render("register")
    },

    profile: (req, res) => {
        return res.render("profile")
    },

    registerProcess: async (req, res) => {
        let errors = validationResult(req)

        if(errors.errors.length > 0){
            return res.render("register", {errors: errors.mapped(), oldData: req.body})
        }

        let userInDB = await usersServices.findUserEmail(req.body.email)

        if(userInDB){
            return res.render("register", {errors: {email: {msg: "Email is already in use"}}, oldData: req.body})
        }

        let newUser = {
            ...req.body,
            id: uuidv4(),
            password: bcrypt.hashSync(req.body.password, 10),
            profile_picture: req.file.filename,
            rank: "user"
        }

        usersServices.createUser(newUser)
        return res.redirect("/login")
    },

    loginProcess: async (req, res) => {
        const userInDB = await usersServices.findUserEmail(req.body.email)

        if(!userInDB){
            return res.render("login", {errors: {email: {msg: "Unregistered email"}}})
        }

        if(!bcrypt.compareSync(req.body.password, userInDB.password)){
            return res.render("login", {errors: {password: {msg: "Incorrect password"}}})
        } else {
            req.session.userLoggedIn = userInDB
            if (userInDB.rank == "admin"){
                req.session.admin = true
            }
            return res.redirect("/")
        }
    }
}