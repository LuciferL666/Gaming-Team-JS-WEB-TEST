const router = require('express').Router(); //9.1

const userManager = require('../managers/userManager') // 11.2
const {getErrorMessage} = require('../utils/errorHelpers')

router.get('/login', (req, res) =>{ //9.1
res.render('users/login'); //9.3
});

router.post('/login', async(req, res) =>{
    const { email, password } = req.body;
try{

    const token = await userManager.login(email, password);
    
    res.cookie('token', token);
    
    res.redirect('/')
} catch (err) {
    res.render('users/login', { error: getErrorMessage(err)}); 
}   
}); //13

router.get('/register', (req, res) => { //9.5
    res.render('users/register'); //9.5
});

router.post('/register', async(req, res) =>{
    const { username, email, password, repeatPassword } =  req.body;

    try{
        const token = await userManager.register({username, email, password, repeatPassword});

        res.cookie('token', token)
        res.redirect('/')

    } catch (err){
        res.render('users/register', { error: getErrorMessage(err), username, email })
    }

});

router.get('/logout', (req, res) =>{
    res.clearCookie('token');

    res.redirect('/')
})

module.exports = router //9.1