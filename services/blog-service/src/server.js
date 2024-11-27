const express = require('express');
const cors = require('cors');
const pool = require('../db');
const BlogRoutes = require("./routes/BlogRoutes");

const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Puerto en el que corre el servidor
const PORT = process.env.PORT || 3004;

// Endpoint de salud
app.get('/health', (req, res) => {
    res.status(200).send({
        status: 'OK',
        uptime: process.uptime(),
        timestamp: Date.now(),
    });
});

// Endpoint base
app.get('/', (req, res) => {
    res.send({ message: "Blog service running" });
});

// Rutas del blog
app.use('/api', BlogRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/comentarios', async (req,res) => {
    try{
        const response = await pool.query('SELECT * FROM comentarios');
        return res.status(200).send(response.rows);
    }catch(error) {
        return res.status(500).send({error: "Can't get comentarios"});
    }
});
