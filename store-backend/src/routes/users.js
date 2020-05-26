const { Router } = require('express');
const {signin, signup} 
= require('../controllers/users.controllers');

const router = Router();

    
router.route('/signin')
    .post(signin)

router.route('/signup')
    .post(signup);

module.exports = router;

