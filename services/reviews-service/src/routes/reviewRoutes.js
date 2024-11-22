const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/ReviewController.js');

router.get('/reviews/:placeId', reviewController.getAllReviews);
router.post('/postReview', reviewController.postReview);
router.put('/likeReview/:reviewId/:userId', reviewController.likeReview);
router.get('/getComments/:reviewId', reviewController.getComments);
router.post('/postCommentToReview/:reviewId', reviewController.postCommentToReview);
router.get('/checkLike/:reviewId/:userId', reviewController.checkLike);

module.exports = router;