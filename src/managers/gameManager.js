const Game = require('../modules/Game');

exports.getAll = () => Game.find().populate('owner')

exports.getOne = (gameId) => Game.findById(gameId)

exports.create = (gameData) => Game.create(gameData);

exports.buyGame = async (gameId, userId) => {
    const game = await Game.findById(gameId);
    if (game.boughtBy.includes(userId)) {
        throw new Error('Product is alredy bought!');
    }

    game.boughtBy.push(userId);
    await game.save();
}

exports.hasBought = async (userId, gameId) => {
    const game = await Game.findById(gameId);
    return game.boughtBy.includes(userId);
};

exports.delete = (gameId) => Game.findByIdAndDelete(gameId);

exports.edit = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData)