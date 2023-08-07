const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    platform: {
        type: String,
        require: true,
    },
    boughtBy: {

    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})