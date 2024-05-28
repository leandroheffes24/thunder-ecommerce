const {Shopping_cart} = require("../../database/models")

const shoppingCartServices = {
    getUserProducts: (userId) => {
        return Shopping_cart.findAll({
            where: {id_user: userId}
        })
    },

    addProductToCart: (userId, productId) => {
        return Shopping_cart.create({
            id_user: userId,
            id_product: productId
        })
    }
}

module.exports = shoppingCartServices