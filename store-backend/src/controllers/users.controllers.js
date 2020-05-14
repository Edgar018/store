const userCtrl = {};

const users = require('../models/users')

userCtrl.getUsers = (req, res) => {
    res.json(users);
};

userCtrl.createUser = (req, res) => {
    const { userName } = req.body;
    users.push({
        userName
    });
    res.json('user save ');
}

userCtrl.deleteUser = (req, res) => {
    const { id } = params.id;
    for(i in users){
        if(users[i].id == id){
            users.splice(i, 1);
            res.json('users delete');
        }
    }
}

module.exports = userCtrl;

