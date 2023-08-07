const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Name is required'],
    },
    image: {
        type: String,
        require: [true, 'ImageUrl is required'],
    },
    price: {
        type: Number,
        require: [true, 'Price is required'],
    },
    description: {
        type: String,
        require: [true, 'Description is required'],
    },
    genre: {
        type: String,
        require: [true, 'Ganre is required'],
    },
    platform: {
        type: String,
        require: [true, 'Platform is required'],
    },
    boughtBy: {

    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game