// Auth middleware is only for authenticated users
const jwt = require('../lib/jwt')

const { SECRET } = require('../config/config');

exports.auth = async(req, res, next) => {

    const token = req.cookies['token']

    if (token){
        try {
            const decodedToken = await jwt.verify(token, SECRET)
            req.user = decodedToken;
            res.locals.user = decodedToken; //22.2
            res.locals.isAuthenticated = true; //22.2

            next();
        } catch(err){
            res.clearCookie('token');

            res.redirect('/users/login')
        }

    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if(!req.user) {
        res.redirect('/users/login');
    }

    next();
};