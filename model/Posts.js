const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    description: {
        type: String,
        required: true,
        min: 6,
        max: 256
    },
    addedTime: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Posts', postSchema);