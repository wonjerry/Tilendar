const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username : 'string',
    password : 'string',
    email : 'string',
    admin: { type: Boolean, default: false}
});

User.statics.create = function(username, password, email) {
    const user = new this({
        username,
        password,
        email
    });
    return user.save();
}

User.statics.findOneByUsername = function(username) {
    return this.findOne({
        username
    }).exec();
}

User.methods.verify = function(password) {
    return this.password === password;
}

User.methods.assignAdmin = function() {
    this.admin = true;
    return this.save();
}

module.exports = mongoose.model('User', User);
