const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres-blog',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'blog'
});

module.exports = pool;

const { Sequelize } = require('sequelize');

// Cambia estos valores por los de tu configuración
const sequelize = new Sequelize('blog', 'root', 'root', {
    host: 'postgres-blog', // Cambia a tu host
    dialect: 'postgres', // Cambia a tu dialecto (mysql, mariadb, sqlite, etc.)
});

module.exports = sequelize;
