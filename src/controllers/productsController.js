const productsServices = require("../services/productsServices")

module.exports = {
    productDetail: async (req, res) => {
        const productId = req.params.productId
        const product = await productsServices.findProductById(productId)
        return res.render("productDetail", {product})
    }
}