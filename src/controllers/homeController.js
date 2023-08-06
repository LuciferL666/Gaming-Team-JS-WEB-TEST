const router = require('express').Router();

router.get('/', (req, res) =>{
    // console.log(req.user);
    res.render('home'); //6.7
});

router.get('/404', (req, res)=>{ //23.1
    res.render('404'); //23.1
})

module.exports = router