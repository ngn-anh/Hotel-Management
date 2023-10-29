import { Fragment } from "react";
import SliderComponent from "../UI/SlideComponent";
import classes from "./Room.module.css";

const Room = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <SliderComponent arrImages={props.arrImages} />
        <div className={classes.name}>
          <h2>{props.type}</h2>
        </div>
        <div className={classes.detail}>
          <p className={classes.inf}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className={classes.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <a href="#">View room details</a>
          </p>
          <button>${props.price} Avg/Night</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Room;
