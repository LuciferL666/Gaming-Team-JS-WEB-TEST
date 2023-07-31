const router = require('express').Router(); //3.3

//TODO add controller routes

const homeController = require('./controllers/homeController');

router.use(homeController);



module.exports = router; //3.3