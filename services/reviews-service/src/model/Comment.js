const mongoose = require('mongoose'); 
const { v4: uuidv4 } = require('uuid');
const userSchema = require("./User").schema;
const commentSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        "user": userSchema,
        "comment": {
            type: String,
            required: true
        },
        "publishDate": {
            type: Date,
            default: Date.now
        }
    }
);

const Comment = mongoose.model('comments',commentSchema);

module.exports = {Comment, schema: commentSchema};