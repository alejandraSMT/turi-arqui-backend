const express = require('express');
const router = express.Router();
const mainController = require('../controllers/MainController');

router.get('/top-places/:placeTypeId', mainController.getTopPlacesByType);
router.get('/searchPlace', mainController.searchPlaceByName);

module.exports = router;
