const router = require('express').Router(); //9.1

const userManager = require('../managers/userManager') // 11.2

router.get('/login', (req, res) =>{ //9.1
res.render('users/login'); //9.3
});

router.post('/login', async(req, res) =>{
    const { email, password } = req.body;

    await userManager.login(email, password);

    res.send('logged in')
}); //13

router.get('/register', (req, res) => { //9.5
    res.render('users/register'); //9.5
});

router.post('/register', async(req, res) =>{
    
})

module.exports = router //9.1