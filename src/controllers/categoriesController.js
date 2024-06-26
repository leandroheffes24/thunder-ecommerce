const categoriesServices = require("../services/categoriesServices")
const productsServices = require("../services/productsServices")

module.exports = {
    category: async (req, res) => {
        const categoryName = req.params.name
        const categoryId = await categoriesServices.getCategoryId(categoryName)
        const categoryProducts = await productsServices.getCategoryProducts(categoryId)
        return res.render("categoryPage", {categoryProducts: categoryProducts, categoryName: categoryName})
    },

    productDetail: (req, res) => {
        const productId = req.params.productId
        console.log("id del producto =>", productId);
        return res.render("productDetail")
    }
}