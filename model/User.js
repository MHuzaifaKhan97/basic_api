<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    date: {
        type: Date,
        default: Date.now
    }

});
=======
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max:256
    },
    date: {
        type: Date,
        default: Date.now
    }

});
>>>>>>> 8d377c5b2452b43ce4358a39842860f5f370805c
module.exports = mongoose.model('User',userSchema);