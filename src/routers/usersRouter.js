const {Router} = require("express")
const usersController = require("../controllers/usersController")
const router = Router()
const multerUpload = require("./multerConfigs/multerUsersConfig")
const registerValidations = require("../middlewares/registerValidations")

router.get("/register", usersController.register)
router.post("/register", multerUpload.single("profilePicture"), registerValidations, usersController.registerProcess)

module.exports = router