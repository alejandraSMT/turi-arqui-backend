const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        parent_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'category',
        freezeTableName: true,
        timestamps: false,
        quoteIdentifiers: false, 
    });

    return Category;
};
