const {Products} = require("../../database/models")

const productsServices = {
    getCategoryProducts: async (categoryId) => {
        const products = await Products.findAll()
        const categoryProducts = await products.filter(product => product.id_category == categoryId)
        return categoryProducts
    },

    findProductById: (productId) => {
        return Products.findByPk(productId)
    }
}

module.exports = productsServices