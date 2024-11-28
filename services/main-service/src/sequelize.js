const { Sequelize } = require('sequelize');
const dbConfig = require('./db'); // Importa tu archivo de configuración

// Inicializa Sequelize
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

// Prueba la conexión
sequelize
    .authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos.'))
    .catch((error) => console.error('Error al conectar a la base de datos:', error));

module.exports = sequelize;
