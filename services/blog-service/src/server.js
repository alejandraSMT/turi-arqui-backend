const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/blog'); // Importar las rutas del blog

const app = express();

// Configuración de CORS
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para parsear JSON
app.use(express.json());

// Rutas del Blog
app.use('/api/blog', blogRoutes); // Integrar las rutas para los comentarios

// Puerto en el que corre el servidor
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Endpoint de salud
app.get('/health', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        responseTime: process.hrtime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.status(200).send(healthCheck);
    } catch (error) {
        healthCheck.message = error;
        res.status(503).send(healthCheck);
    }
});

// Endpoint raíz
app.get('/', (req, res) => {
    res.send({ message: "Blog service running" });
});
