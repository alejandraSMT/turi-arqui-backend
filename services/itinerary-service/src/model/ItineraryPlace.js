const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importa sequelize.js

const ItineraryPlace = sequelize.define('ItineraryPlace', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    itinerary_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Relación sin foránea por microservicios
    },
    place_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Sin relación foránea
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    day_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1 },
    },
},{
    freezeTableName: true,
    timestamps: false,
    quoteIdentifiers: false,   
    tableName: 'ItineraryPlace' // Asegúrate de que coincide con el nombre de la tabla en la base de datos
});

module.exports = ItineraryPlace;
