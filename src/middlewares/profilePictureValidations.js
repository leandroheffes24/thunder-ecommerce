const {body} = require("express-validator")
const path = require("path")

module.exports = [
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