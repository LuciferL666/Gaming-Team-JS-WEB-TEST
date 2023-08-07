const router = require('express').Router(); //3.3

//TODO add controller routes

const homeController = require('./controllers/homeController'); // 7
const userController = require('./controllers/userController');// 9.2
const gameController = require('./controllers/gameController');

router.use(homeController); // 7
router.use('/users' , userController); //9.2
router.use('/games', gameController);
router.get('*', (req, res)=>{ //23.1
    res.redirect('/404') //23.1
})





module.exports = router; //3.3