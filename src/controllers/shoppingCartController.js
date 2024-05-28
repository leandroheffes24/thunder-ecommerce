const shoppingCartServices = require("../services/shoppingCartServices")
const productsServices = require("../services/productsServices")

module.exports = {
    shoppingCart: async (req, res) => {
        const user = req.session.userLoggedIn
        const userId = user.id
        const shoppingCartProducts = await shoppingCartServices.getUserProducts(userId)

        const finalProducts = await Promise.all(
            shoppingCartProducts.map(async product => {
                return await productsServices.findProductById(product.id_product)
            })
        )

        return await res.render("shoppingCart", {finalProducts: finalProducts})
    },

    addShoppingCartProcess: (req, res) => {
        const user = req.session.userLoggedIn
        const userId = user.id
        const productId = req.params.productId

        return shoppingCartServices.addProductToCart(userId, productId)
    }
}