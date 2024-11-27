module.exports = {
    HOST: 'postgres-user',
    PORT:  5432,
    USER: 'root',
    PASSWORD: 'root',
    DB: 'user',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

