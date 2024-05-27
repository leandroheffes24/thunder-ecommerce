const {Router} = require("express")
const shoppingCartController = require("../controllers/shoppingCartController")
const router = Router()

router.get("/shopping-cart", shoppingCartController.shoppingCart)
router.post("/shopping-cart/:productId", shoppingCartController.addShoppingCartProcess)

module.exports = router