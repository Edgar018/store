import React, { useState, useEffect, Fragment, useCallback,} from "react";
import { socket } from '../service.socket';
import Axios from "axios";

const URL = "http://localhost:4000/api/chat";
let userID = localStorage.getItem("id");

const Chat = ({ pageID, validation }) => {

  const [messageChat, setMessageChat] = useState({
    message: "",
    name: localStorage.getItem("name"),
    messageID: "",
    editing: false,
  });

  const [chat, setChat] = useState([]);

  const getMessages = useCallback(() => {
    const fetchData = async () => {
      await Axios.post(URL, {
        id: pageID,
      }).then((res) => {
        setChat(res.data);
      });
    }
    fetchData();
  }, [pageID]);

  useEffect(() => getMessages(), [getMessages]);

  useEffect(() => {
    socket.on('message', (chat) => {
      setChat(chat);
    });

    socket.on('delete', (chat) => {
      setChat(chat);
    });
    
    socket.on('edit', (chat) => {
      setChat(chat);
    });
  }, []);


  const editMessage = (id) => {
   const message = chat.filter(m => (
     m.messageID === id
     ? m
     : ''
   ));
   setMessageChat(
     {
       ...messageChat, 
        messageID: message[0].messageID,
        message: message[0].message,
        editing: true
      })
  };


  const deleteMessage = async (messageID) => {
    socket.emit('delete',{messageID, pageID});

  };

  const onTextChange = (e) => {
    setMessageChat({ ...messageChat, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageChat.editing) {
      if (validation()) {
        const { name, message } = messageChat;
        socket.emit('message', { name, message, pageID, userID });
      } else {
        console.log("error");
      }
    } else {
      socket.emit('edit', {
        messageID: messageChat.messageID,
        message: messageChat.message,
        pageID
      });
    }
    setMessageChat({
      message: "",
      name: localStorage.getItem("name"),
    });
  };

  const renderChat = () => {
    return chat.map((message, i) => (
      <div className="card mt-2 mb-5" key={i}>
          {
            message.userID === userID?
            <div className="card-header">
              <button
                onClick={() => editMessage(message.messageID)}
                className="btn btn-info mr-2"
              >
                Edit
              </button>
              <button
                onClick={
                  () => deleteMessage(message.messageID)
                }
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
            :
              ''
          }
        <div className="card-body">
          <h3>
            <strong>{message.name}:</strong>
          </h3>
          <p>{message.message}</p>
        </div>
      </div>
    ));
  };

  return (
    <Fragment>
      <div className="row mt-5">
        <div className="col-md-12">
          <form onSubmit={onMessageSubmit} className="d-flex">
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                value={messageChat.message}
                type="text"
                onChange={(e) => onTextChange(e)}
                placeholder="write message"
                id="outlined-multiline-static"
                variant="outlined"
                cols="70"
              />
            </div>
            <button className="btn btn-primary ml-2" style={{ height: "60px" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-5">{renderChat()}</div>
      </div>
    </Fragment>
  );
};

export default Chat;
