const mongoose = require('mongoose');

const reportsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
    },
    reviewId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    comment: {
        type: String
    },
    reason: {
        type: String,
        required: true
    }

    },{ versionKey: false } 
);

const Report = mongoose.model('reports',reportsSchema);

module.exports = Report;