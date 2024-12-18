module.exports = {
    HOST: 'postgres-itinerary',
    PORT:  5432,
    USER: 'root',
    PASSWORD: 'root',
    DB: 'itinerary',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};