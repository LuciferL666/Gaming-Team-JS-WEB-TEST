const router = require('express').Router()

const gameManager =  require('../managers/gameManager'); //29.1
const { getErrorMessage } = require('../utils/errorHelpers')

router.get('/catalog', async (req, res)=>{
    const games = await gameManager.getAll().lean()
    res.render('games/catalog', {games});
});

router.get('/create', (req, res)=>{
    res.render('games/create');
});

router.post('/create', async(req, res)=>{
    const gameData = { //30
        ...req.body, //30
        owner: req.user._id, //30
    }

    try {
        await gameManager.create(gameData);

        res.redirect('/games/catalog')
    }catch (err){
        res.render('games/create', { error: getErrorMessage(err) });
    }
});

router.get('/:gameId/details', async (req, res) => {
    const game = await gameManager.getOne(req.params.gameId).lean();
    let isBought = false;
    let isLogin = false;
    if (!game) {
        return res.redirect('/404');
    }

    isOwner = game.owner?.toString() === req.user?._id;
    if (req.user) {
        isLogin = true;
        const userId = req.user._id;
        const gameId = req.params.gameId;
        isBought = await gameManager.hasBought(userId, gameId);
        console.log(isBought);
    }

    res.render("games/details", { game, isLogin, isOwner, isBought })
});

router.get('/:gameId/delete', async (req, res) =>{
    const gameId = req.params.gameId
    try{
        await gameManager.delete(gameId);

        res.redirect('/games/catalog')
    } catch (err){
        res.redirect(`/games/${gameId}/details`, {error: 'Unsuccessful game deletion'})
    }
})

module.exports = router;