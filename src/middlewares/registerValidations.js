const {body} = require("express-validator")
const path = require("path")

module.exports = [
    body("name").notEmpty().withMessage("You must enter your name"),
    body("lastName").notEmpty().withMessage("You must enter your last name"),
    body("email").notEmpty().withMessage("You must enter an email address").isEmail().withMessage("You must enter a valid email"),
    body("password").notEmpty().withMessage("You must enter a password").isLength({min: 6}).withMessage("Password must contain at least 6 characters"),
    body("profilePicture").custom((value, {req}) => {
        let file = req.file
        let acceptedExtensions = [".png", ".jpg"]

        if(!file){
            throw new Error("You must upload an image")
        } else {
            let extensionFile = path.extname(file.originalname)

            if(!acceptedExtensions.includes(extensionFile)){
                throw new Error(`Accepted file extensions are: ${acceptedExtensions.join(", ")}`)
            }
        }

        return true
    })
]