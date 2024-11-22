const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Puerto en el que corre el servidor
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

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

app.get('/', (req, res) => {
    res.send({message: "Main service running"});
})