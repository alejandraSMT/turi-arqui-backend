const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importa sequelize.js

const Itinerary = sequelize.define('Itinerary', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    duration_days: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1 },
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Sin relación foránea
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    num_people: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1 },
    },
},{
    freezeTableName: true,
    timestamps: false,
    quoteIdentifiers: false, 
    tableName: 'itinerary', // Asegúrate de que coincide con el nombre de la tabla en la base de datos
});

module.exports = Itinerary;
