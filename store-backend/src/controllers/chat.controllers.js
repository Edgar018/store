const chatCtrl = {};
const { v4 } = require('uuid');
const { getConnection } = require('../database');

chatCtrl.getChat = async (req, res) => {
    const chat = await getConnection()
    .get('chats')
    .filter({pageID: req.body.id})
    .value();
    res.json(chat);
}

chatCtrl.messagesChat = async (userID, id, message, name) => {
    const newMessage = {
        messageID: v4(),
        userID: userID,
        pageID: id,
        message: message,
        name: name
    }
    await getConnection()
    .get('chats')
    .push(newMessage)
    .write();
    return await newMessage.messageID;
}

chatCtrl.getMessage = async (req, res) => {
    const message = await getConnection()
    .get('chats')
    .find({messageID: req.params.id})
    .value();
    res.json(message);
}

chatCtrl.editMessage = async (messageID, message) => {
    getConnection()
    .get('chats')
    .find({messageID: messageID})
    .assign({message: message})
    .write();
}

chatCtrl.messageDelete = async (id) => {

   await getConnection()
   .get('chats')
   .remove({messageID: id})
   .write();
}

module.exports = chatCtrl;