const mongoose = require('mongoose');
const commentSchema  = require("../model/Comment.js").schema;
const userSchema = require("./User.js").schema;

const reviewsSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        "user": userSchema,
        "publishDate": {
            type: Date,
            default: Date.now
        },
        "rating": {
            type: Number,
            required: true
        },
        "title": {
            type: String, 
            required: false
        },
        "description": {
            type: String,
            required: false
        },
        "likes": {
            type: Array,
            default: []
        },
        countLike: {
            type: Number,
            default: 0
        },
        countComments: {
            type: Number,
            default: 0
        },
        "comments": [commentSchema ]
    },{ versionKey: false } 
);

const Review = mongoose.model('reviews',reviewsSchema);

module.exports = Review;