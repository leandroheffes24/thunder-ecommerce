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
        Model.belongsToMany(model.Products, {
            as: "product",
            through: "products_categories",
            foreignKey: "id_category", // La clave foránea en la tabla intermedia products_categories
            otherKey: "id_product", // La clave foránea en la tabla Products
            timestamps: false
        })
    }

    return Model
}