const {Router} = require("express")
const usersController = require("../controllers/usersController")
const router = Router()
const multerUpload = require("./multerConfigs/multerUsersConfig")
const registerValidations = require("../middlewares/registerValidations")
const profilePictureValidations = require("../middlewares/profilePictureValidations")

router.get("/register", usersController.register)
router.post("/register", multerUpload.single("profilePicture"), registerValidations, usersController.registerProcess)
router.get("/login", usersController.login)
router.post("/login", usersController.loginProcess)
router.get("/profile", usersController.profile)
router.get("/edit-profile", usersController.editProfile)
router.post("/edit-profile/:id", usersController.editProfileProcess)
router.post("/edit-profile-picture/:id", multerUpload.single("profilePicture"), profilePictureValidations, usersController.editProfilePicture)
router.get("/logout", usersController.logout)

module.exports = router