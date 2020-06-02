const userCtrl = {};
const { v4 } = require('uuid');
const { getConnection } = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


userCtrl.signup = async (req, res) => {

    const email = await getConnection()
    .get('users')
    .find({email: req.body.email})
    .value();
    if(email === undefined){

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const newUser = {
            id: v4(),
            username: req.body.username,
            email: req.body.email,
            password: hash
        }
        await getConnection()
        .get('users')
        .push(newUser)
        .write();
        //SEND TOKEN

        let userId = newUser.id

        const token = await  jwt.sign
        ({id: newUser.id}, 'secretkey');
        return res.status(200).json({token, userId});
    }
    return res.status(401).json('este email ya existe');
}

userCtrl.signin = async (req, res) => {

    const user = await getConnection().get('users')
    .find({email: req.body.email}).value();

    const isMatch = await bcrypt.compare
    (req.body.password, user.password);

    if(
        user.email === undefined || 
        user.username === undefined || 
        isMatch === false
    ){
        return res.status(401).json('incorrect email or username or password');
    }

    //SEND TOKEN

    let userId = user.id

    const token = await jwt.sign({id: user.id},'secretkey');
    return res.status(200).json({token, userId});
   
}

module.exports = userCtrl;
