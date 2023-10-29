import picture3 from "../../assets/Group 2.jpg";
import { Fragment,useState } from "react";
import classes from "./Header.module.css";
import Chat from "../Chat/Chat";



const Header = (props) => {
  const [isChat, setChat] = useState(false);
  function click() {
    setChat(!isChat)
  }
  
  return (
    <Fragment className={classes.container}>
      <header className={classes.header}>
        <h1> ReactMeals </h1>
        <div className={classes.feature}>
          <div>
            <a
              onClick={props.onHomeClick}
              className={props.currentPage ? classes.current : ""}
            >
              {" "}
              Home{" "}
            </a>
          </div>
          <div>
            <a
              onClick={props.onBookClick}
              className={props.currentPage ? "" : classes.current}
            >
              {" "}
              Book Now{" "}
            </a>
          </div>
        </div>
        <img src={picture3} className={classes.headerModal} alt="Homepage" />
      </header>
      {isChat? <Chat onClick={click}/>:""}
      <div className={classes.chat} onClick={click}>
        <ion-icon name="logo-wechat"></ion-icon>
      </div>
    </Fragment>
  );
};
export default Header;
