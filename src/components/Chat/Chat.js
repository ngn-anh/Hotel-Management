import { Fragment } from "react";
import classes from "./Chat.module.css";

const Chat = (props) => {
  return (
    <Fragment>
      <div className={classes.containerChat}>
        <div className={classes.topbar}>
          <div className={classes.name} >
            <ion-icon name="business-outline"></ion-icon>
            <p>Luxury Hotel</p>
          </div>

          <div onClick={props.onClick} className={classes.close}><ion-icon name="remove-outline" ></ion-icon></div>
        </div>
        <div className={classes.content}>
          <p className={classes.customer}>Some one here?</p>
          <p className={classes.hotel}>Hi, How can I help you?</p>
          <p className={classes.customer}> Hi, I have some problem. </p>
          <p className={classes.customer}>
            I want a double room but I don't know about it. Can you describe for
            me?
          </p>
          <p className={classes.hotel}>Oh, Of Course!</p>
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
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class={classes.attach}
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
