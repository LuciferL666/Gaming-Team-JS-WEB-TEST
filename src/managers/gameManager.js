const Game = require('../modules/Game');

exports.getAll = () => Game.find()

exports.create = (gameData) => Game.create(gameData);