const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

module.exports = (sequelize) => {
const PlaceCategory = sequelize.define('PlaceCategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    place_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // ID de Place
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // ID de Category
    },
}, {
    tableName: 'placecategory', // Nombre explícito de la tabla
    freezeTableName: true,
    timestamps: false,
    quoteIdentifiers: false,  // Sin columnas createdAt y updatedAt
});

return PlaceCategory};
