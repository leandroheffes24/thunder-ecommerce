const {Router} = require("express")
const categoriesController = require("../controllers/categoriesController")
const router = Router()

router.get("/:name", categoriesController.category)

module.exports = router