const { Pool } = require('pg');

const pool = new Pool({
    host: 'postgres-itinerary',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'itinerary'
});

module.exports = pool;