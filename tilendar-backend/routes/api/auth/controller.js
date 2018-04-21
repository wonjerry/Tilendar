/*
    Post /api/auth/register
    {
        username,
        password,
        email
    }
*/

const User = require('../../../models/User');
exports.register = (req, res) => {
    const {username, password, email} = req.body;
    let newUser = null;

    const create = (user) => {
        if(user) {
            throw new Error('User already exists');
        } else {
            return User.create(username, password, email);
        }
    }

    const count = (user) => {
        newUser = user;
        return User.count({}).exec();
    }

    const respond = () =>{
        res.json({
            message : "successfully registered"
        })
    }

    const onError = (error) => {
        res.status(409).json({
            message : error.message
        })
    }

    User.findOneByUsername(username)
    .then(create)
    .then(count)
    .then(respond)
    .catch(onError)
};