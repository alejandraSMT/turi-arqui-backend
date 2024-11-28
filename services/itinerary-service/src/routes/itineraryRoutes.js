const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/ItineraryController.js');

router.get('/itinerary/:userId', itineraryController.getItineraries);

module.exports = router;