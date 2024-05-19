const categoriesServices = require("../services/categoriesServices")

module.exports = {
    index: (req, res) => {
        return categoriesServices.getAllCategories().then(categories => res.render("index", {categories}))
    }
}