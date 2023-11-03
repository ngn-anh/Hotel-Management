import { Fragment, useEffect, useState } from "react";
import classes from "./Chat.module.css";
import io from "socket.io-client";

const socket = io.connect("http://95.111.200.168:3001");

const Chat = ({onClick}) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: socket.id,
        message: currentMessage,
        time:
          String(new Date(Date.now()).getHours()).padStart(2, "0") +
          ":" +
          String(new Date(Date.now()).getMinutes()).padStart(2, "0"),
      };

      await socket.emit('send_message', messageData);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((prevList) => [...prevList, data]);
    });
  }, [socket]);

  return (
    <Fragment>
      <div className={classes.containerChat}>
        <div className={classes.topbar}>
          <div className={classes.name}>
            <ion-icon name="business-outline"></ion-icon>
            <p>Luxury Hotel</p>
          </div>

          <div onClick={onClick} className={classes.close}>
            <ion-icon name="remove-outline"></ion-icon>
          </div>
        </div>
        <div className={classes.content}>
          {messageList.map((messageContent, index) => {
            if (index % 2 == 0) {
              return (
                <p className={messageContent.id === socket.id ? classes.customer : classes.hotel}>{messageContent.message} <br/> ({messageContent.time})</p>
              )
            }
          })}
        </div>
        <div className={classes.bottombar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class={classes.attach}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>

          <input
            type="text"
            placeholder="Typing something..."
            className={classes.input}
            onChange={(event) => setCurrentMessage(event.target.value)}
            value={currentMessage}
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class={classes.attach}
            onClick={sendMessage}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </div>
      </div>
    </Fragment>
  );
};

export default Chat;
