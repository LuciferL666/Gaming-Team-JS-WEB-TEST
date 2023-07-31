const router = require('express').Router();

router.get('/', (req, res) =>{
    res.render('home'); //6.7
}) 

module.exports = router