const {Categories} = require("../../database/models")

const categoriesServices = {
    getAllCategories: () => {
        return Categories.findAll()
    },

    getCategoryId: async (categoryName) => {
        const categories = await Categories.findAll()
        const categorySelected = categories.filter(category => category.name.toLowerCase() == categoryName)
        if(categorySelected[0] === undefined){
            return undefined
        } else {
            return categorySelected[0].dataValues.id
        }
    }
}

module.exports = categoriesServices