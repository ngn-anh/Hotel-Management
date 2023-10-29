import { Fragment } from "react";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h2>Testimonials</h2>
        <p className={classes.text}>
          "Calm, Serene, Retro - What a way to relax and enjoy"
        </p>
        <p className={classes.author}>Mr. and Mrs. Baxter, UK</p>
      </div>
    </Fragment>
  );
};

export default Testimonials;
