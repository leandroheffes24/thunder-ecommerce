const {Products} = require("../../database/models")

const productsServices = {
    getCategoryProducts: async (categoryId) => {
        const products = await Products.findAll()
        // console.log(products);
        const categoryProducts = products.filter(product => product.id_category == categoryId)
        return categoryProducts
    }
}

module.exports = productsServices