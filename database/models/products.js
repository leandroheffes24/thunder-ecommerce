module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Products",
        {
            id: {type: DataTypes.INTEGER, primaryKey: true},
            price: DataTypes.DECIMAL,
            discount: DataTypes.INTEGER,
            product_name: DataTypes.STRING,
            image: DataTypes.STRING,
        },
        {
            tableName: "products",
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    )

    Model.associate = (model) => {
        Model.belongsTo(model.Categories, {
            as: "category",
            through: "products_categories",
            foreignKey: "id_category", // La clave foránea en la tabla Products
            targetKey: "id", // La clave primaria de la tabla Categories
            timestamps: false
        })
    }

    return Model
}