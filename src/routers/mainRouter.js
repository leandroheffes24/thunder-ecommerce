const {Router} = require("express")
const mainController = require("../controllers/mainController")
const router = Router()

router.get("/", mainController.index)
router.get("/register", mainController.register)

module.exports = router