const {Categories} = require("../../database/models")

const categoriesServices = {
    getAllCategories: () => {
        return Categories.findAll()
    },

    getCategoryId: async (categoryName) => {
        const categories = await Categories.findAll()
        const categorySelected = await categories.filter(category => category.name.toLowerCase() == categoryName)
        const categoryId = await categorySelected[0].id
        return categoryId
    }
}

module.exports = categoriesServices