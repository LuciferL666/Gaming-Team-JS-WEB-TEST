// Auth middleware is only for authenticated users
const jwt = require('../lib/jwt')

const { SECRET } = require('../config/config');

exports.auth = async(req, res, next) => {

    const token = req.cookies['token']

    if (token){
        try {
            const decodedToken = await jwt.verify(token, SECRET)
            req.user = decodedToken;
            next();
        } catch(err){
            res.clearCookie('token');

            res.redirect('/users/login')
        }

    } else {
        next();
    }
}