import { Fragment } from "react";
import classes from "./Intro.module.css";

const Intro = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h3>Rooms and rates</h3>
        <p>
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn't
        </p>
        <p>
          our only objective, we also value good design, sleek contemporary
          furnishing complemented by the rich tones of
        </p>
        <p className={classes.last}>
          {" "}
          nature's palette as visible from our room's sea-view windows and
          terraces
        </p>
      </div>
    </Fragment>
  );
};
export default Intro;
