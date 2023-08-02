const bcrypt = require('bcrypt');

const jwt = require('../lib/jwt');
const User = require('../modules/user');
const SECRET = 'ac19a4ba-9346-4333-9f0f-386ea29dfa9a';

exports.login = async ( email, password ) =>{
    //find user by email
const user = await User.findOne({ email });//16.1

if(!user){ //16.1
    throw new Error('Invalid user or password'); //16.1
}

    // check password
    const isValid = await bcrypt.compare(password, user.password) //16.2
    if(!isValid){ //16.2
        throw new Error('Invalid user or password'); //16.2
    } //16.2

    const payload = { 
        _id: user._id,
        username: user.username,
        email: user.email
    }
const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});

return token;
};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username}); //14.3
    if(user){ //14.3
        throw new Error('Username already exists'); //14.3
    } //14.3

    return User.create(userData);//14.3
}