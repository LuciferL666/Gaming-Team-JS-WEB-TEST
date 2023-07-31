const router = require('express').Router(); //9.1

router.get('/login', (req, res) =>{ //9.1
res.render('users/login'); //9.3
});

router.get('/register', (req, res) => { //9.5
    res.render('users/register'); //9.5
});

module.exports = router //9.1