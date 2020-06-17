const app = require('./app');
const { createConnection, getConnection } = 
require('./database');

const { messagesChat, messageDelete, editMessage } =
require('./controllers/chat.controllers');

const http = require('http')

//SOCKET.IO
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('message',  async ({ name, message, pageID, userID }) => {
    const messageID =  await messagesChat(userID, pageID, message, name);
      io.emit('message', { name, message, messageID, userID });
    });

    socket.on('edit', ({ messageID, message }) => {
      io.emit('edit', { messageID, message })
      editMessage(messageID, message);
    });

    socket.on('delete', ({ id }) => {
      io.emit('delete', {res: 'delete message', id: id});
      messageDelete(id);
    });
    
  });   

//SERVER
async function main() {
    await server.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}
main();
createConnection();