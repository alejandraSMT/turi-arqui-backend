const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/ReviewController.js');

router.get('/reviews', reviewController.getAllReviews);
router.post('/postReview', reviewController.postReview);
router.put('/likeReview', reviewController.likeReview);
router.get('/getComments/:reviewId', reviewController.getComments);

module.exports = router;