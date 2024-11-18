const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const host = 'http://127.0.0.1:' + port;

app.listen(port, () => console.log(host));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));
app.use(cors());

app.get('/health', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
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


// 1. mongoose - MongoDB Connection

const mongodbURL = 'mongodb://mongodb:27017/turi-reviews';
mongoose.connect(mongodbURL)
    .then(result => console.log('*** Connected! ***', result))
    .catch(error => handleError(error.message));

function handleError(error){
    console.log(error);
}

// 2. Create a Schema
const reviewsSchema = new mongoose.Schema(
    {
        "name": {
            type: String,
            required: true
        },
        "id": {
            type: Number,
            required: true,
            unique: true
        }
    }
);

// 3. Create a Model (collection / tables)
const reviews = mongoose.model('reviews',reviewsSchema);

// 4. CRUD

// APIs
app.get('/', (req, res) => {
    res.send({message: "Reviews service running"});
})

app.get('/reviews', async (req, res) => {
    const result = await reviews.find();
    res.send(result);
})

/*app.get('/reviews/:id', async (req, res) => {
    const id = Number(req.params.id);
    const result = await db.find({"id": id}).toArray();
    res.send(result);
})

app.get('/reviews/name/:name', async (req, res) => {
    const name = req.params.name;
    const result = await db.find({"name":name}).toArray();
    res.send(result);
})*/