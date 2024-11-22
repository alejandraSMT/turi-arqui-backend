const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const host = 'http://127.0.0.1:' + port;

const reviewRoutes = require("./routes/reviewRoutes");

app.listen(port, () => console.log(host));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());

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


// mongoose - MongoDB Connection

const mongodbURL = 'mongodb://mongodb:27017/turi-reviews';
mongoose.connect(mongodbURL)
    .then(result => console.log('*** Connected! ***', result))
    .catch(error => handleError(error.message));

function handleError(error){
    console.log(error);
}

// APIs
app.get('/', (req, res) => {
    res.send({message: "Reviews service running"});
})

app.use('/api', reviewRoutes);