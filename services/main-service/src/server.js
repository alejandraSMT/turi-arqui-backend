const express = require('express');
const cors = require('cors');
const app = express();
const mainRoutes = require('./routes/mainRoutes');
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use('/api', mainRoutes);
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

app.get('/users', async (req,res) => {
    try{
        const response = await pool.query('SELECT * FROM Usuarios');
        return res.status(200).send(response.rows);
    }catch(error) {
        return res.status(500).send({error: "Can't get users"});
    }
});

app.get('/', (req, res) => {
    res.send({message: "Main service running"});
})