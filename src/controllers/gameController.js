const router = require('express').Router()

const gameManager =  require('../managers/gameManager'); //29.1
const { getErrorMessage } = require('../utils/errorHelpers')

router.get('/create', (req, res)=>{
    res.render('games/create')
});

router.post('/create', async(req, res)=>{
    const gameData = { //30
        ...req.body, //30
        owner: req.user._id, //30
    }

    try {
        await gameManager.create(gameData);

        res.redirect('/catalog')
    }catch (err){
        res.render('games/create', { error: getErrorMessage(err) });
    }
});

module.exports = router;