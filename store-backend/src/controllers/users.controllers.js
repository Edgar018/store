const userCtrl = {};
const { v4 } = require('uuid');
const { getConnection } = require('../database');
const jwt = require('jsonwebtoken');

userCtrl.signup = (req, res) => {

    const email = getConnection().get('users').find({email: req.body.email})
    .value();
    if(email === undefined){
        const newUser = {
            id: v4(),
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        getConnection().get('users').push(newUser).write();
        //SEND TOKEN
        const token = jwt.sign({id: newUser.id}, 'secretkey');
        return res.status(200).json({token});
    }
    return res.status(401).json('este email ya existe');
}

userCtrl.signin = (req, res) => {

    const email = getConnection().get('users')
    .find({email: req.body.email});

    const username = getConnection().get('users')
    .find({username: req.body.username});

    const password = getConnection().get('users')
    .find({password: req.body.password});

    if(
        email === undefined || 
        username === undefined || 
        password === undefined
    ){
        return res.status(401).json('username or email or password wrong');
    }

    //SEND TOKEN
    let user = getConnection().get('users')
    .find({email: req.body.email}).value();
    const token = jwt.sign({id: user.id},'secretkey');
    return res.status(200).json({token});
   
}

module.exports = userCtrl;
