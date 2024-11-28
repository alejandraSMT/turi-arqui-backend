const sequelize = require('../sequelize'); // Importa sequelize.js
const Itinerary = require('./Itinerary');
const ItineraryPlace = require('./ItineraryPlace');

// Define las relaciones
Itinerary.hasMany(ItineraryPlace, { foreignKey: 'itinerary_id' });
ItineraryPlace.belongsTo(Itinerary, { foreignKey: 'itinerary_id' });

// Sincroniza tablas
sequelize
    .sync({ alter: true })
    .then(() => console.log('Tablas sincronizadas con éxito.'))
    .catch((error) => console.error('Error al sincronizar tablas:', error));

module.exports = { sequelize, Itinerary, ItineraryPlace };
