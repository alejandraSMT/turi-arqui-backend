const Review = require('../model/Review.js');

exports.getAllReviews = async (req, res) => {
    try{
        const result = await Review.find().select(['-comments']);
        res.json(result);
    } catch(e) {
        console.error(e);
        res.status(500).json({error: "Can't get reviews"});
    }
}

exports.getComments = async (req, res) => {
    try{
        const reviewId = req.params.reviewId;
        const response = await Review.findById(reviewId).select(['comments']);
        
        if(response) {
            console.log(response);
            res.status(200).json(response);
        }

    }catch(e) {
        console.error(e);
        res.status(500).json({error: "Can't get review comments"});
    }
}

exports.postCommentToReview = async (req, res) => {
    try{
        const reviewId = req.params.reviewId;
        const { name, description } = req.body;

        const newComment = new Comment({
            name: name,
            description: description
        });
        
        const response = await Review.findByIdAndUpdate(
            reviewId,
            {
                "$push": {"comments": newComment},
                "$inc": {"countComments": 1}
            },
            { "new": true, "upsert": true}
        );
        
        if(response) {
            console.log(response);
            res.status(200).json(response);
        }

    }catch(e) {
        console.error(e);
        res.status(500).json({error: "Can't get review comments"});
    }
}

exports.postReview = async (req, res) => {
    try {
        const { rating, title, description, user } = req.body;
        if(rating <= 0){
            res.status(400).json({error: "El rating debe ser mayor a 0"});
        }

        const review = new Review({
            rating: rating,
            title: title, 
            description: description,
            user: {
                name: user.name
            }
        })
        const response = await review.save();
        res.status(201).json(response);
    }catch(e) {
        console.log(e);
        res.status(500).json({error: "Can't post review"});
    }
}

exports.likeReview = async (req, res) => {
    try{
        const {reviewId, userId} = req.body;

        const review = await Review.findById(reviewId);
        const userLiked = Array.from(review.likes).includes(userId);

        if(userLiked){
            return res.status(400).json({error: 'Already liked this post'})
        }

        const updateLike = await Review.findByIdAndUpdate(
            reviewId,
            {
                "$push": { "likes": userId },
                "$inc": { "countLike": 1 }
            },
            { "new": true, "upsert": true }
        );
        
        if (!updateLike) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(updateLike);

    }catch(e){
        console.log(e);
        res.status(500).json({error: "Can't like review"});
    }
}