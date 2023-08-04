const router = require('express').Router();

router.get('/', (req, res) =>{
    // console.log(req.user);
    res.render('home'); //6.7
}) 

module.exports = router