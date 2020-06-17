const app = require('./app');
const { createConnection, getConnection } = 
require('./database');

const { messagesChat, messageDelete, editMessage, getMessageAll } =
require('./controllers/chat.controllers');

const http = require('http')

//SOCKET.IO
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('message',  async ({ name, message, pageID, userID }) => {
    const messageID =  await messagesChat(userID, pageID, message, name);
      const chat = await getMessageAll(pageID);
      io.emit('message',  chat);
    });

    socket.on('edit', async ({ messageID, message, pageID }) => {
      editMessage(messageID, message);
      const chat = await getMessageAll(pageID);
      io.emit('edit', chat)
    });

    socket.on('delete', async ({ messageID, pageID }) => {
      await messageDelete(messageID);
      const chat = await getMessageAll(pageID);
      io.emit('delete', chat);
    });
    
  });   

//SERVER
async function main() {
    await server.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}
main();
createConnection();