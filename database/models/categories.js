// const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Categories",
        {
            id: {type: DataTypes.INTEGER, primaryKey: true},
            name: DataTypes.STRING
        },
        {
            tableName: "categories",
            timestamps: false
        }
    )

    Model.associate = (model) => {
        Model.hasMany(model.Products, {
            as: "product",
            through: "products_categories",
            foreignKey: "id_category",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return Model
}