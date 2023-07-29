const router = require('express').Router(); //3.3

//TODO add controller routes

router.get('/', (req, res) =>{
    res.render('home'); //6.7
})


module.exports = router; //3.3