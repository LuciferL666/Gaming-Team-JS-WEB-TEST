const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
username: {
    type: String,
    required: true,
    unique: true, //14.1
},
password: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique: true, //14.1
}
});

userSchema.virtual('repeatPassword')
.set(function(value){
if(this.password !== value){
    throw new Error('Password missmatch!')
}
});

userSchema.pre('save', async function() { //15.2
     const hash = await bcrypt.hash(this.password, 10);
     this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;