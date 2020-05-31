const userCtrl = {};
const { v4 } = require('uuid');
const { getConnection } = require('../database');
const jwt = require('jsonwebtoken');

userCtrl.signup = (req, res) => {
    console.log(req.body);
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

        let userId = newUser.id

        const token = jwt.sign({id: newUser.id}, 'secretkey');
        return res.status(200).json({token, userId});
    }
    return res.status(401).json('este email ya existe');
}

userCtrl.signin = (req, res) => {
    console.log(req.body);

    const email = getConnection().get('users')
    .find({email: req.body.email});

    const username = getConnection().get('users')
    .find({username: req.body.username});

    const password = getConnection().get('users')
    .find({password: req.body.password});

    console.log(email);
    console.log(username);
    console.log(password);

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
    console.log(user);

    let userId = user.id

    const token = jwt.sign({id: user.id},'secretkey');
    return res.status(200).json({token, userId});
   
}

module.exports = userCtrl;
