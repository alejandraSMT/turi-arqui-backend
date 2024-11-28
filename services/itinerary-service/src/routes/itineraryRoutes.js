const express = require('express');
const router = express.Router();
const itineraryController = require('../controllers/ItineraryController.js');

router.get('/getItinerary/:userId', itineraryController.getItineraries);
router.post('/itinerary', itineraryController.createItinerary);
module.exports = router;