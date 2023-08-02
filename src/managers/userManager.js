const User = require('../modules/user');

exports.login = ( email, password ) =>{

};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username}); //14.3
    if(user){ //14.3
        throw new Error('Username already exists'); //14.3
    } //14.3

    return User.create(userData);//14.3
}