const { Router } = require('express');
const { getChat, messageDelete, getMessage, editMessage } 
= require('../controllers/chat.controllers');

const router = Router();

router.route('/')
    .post(getChat);
    
router.route('/:id')
    .delete(messageDelete)
    .get(getMessage)
    .put(editMessage);

module.exports = router;