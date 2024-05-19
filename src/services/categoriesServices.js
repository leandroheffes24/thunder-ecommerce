const {Categories} = require("../../database/models")
// const Sequelize = require("sequelize")

const categoriesServices = {
    getAllCategories: () => {
        return Categories.findAll()
    }
}

module.exports = categoriesServices