import picture0 from "../../assets/picture0.jpg";
import picture2 from "../../assets/Book now.jpg";
import { Fragment } from "react";
import classes from "./HeroImage.module.css";

const HeroImage = (props) => {
  return (
    <Fragment className={classes.container}>
      <div className={classes["main-image"]}>
        <img src={picture0} className={classes.home} alt="Homepage" />
      </div>
      <img
        onClick={props.onBookClick}
        src={picture2}
        className={classes.modal}
        alt="Homepage"
      />
      <div className={classes.title}>
        <p className={classes.welcome}> WELCOME </p>
        <h1> LUXURY </h1>
        <h2> HOTELS </h2>
        <p className={classes.para}>
          Book your stay and enjoy Luxury redefined at the most affordable rates
        </p>
      </div>
    </Fragment>
  );
};
export default HeroImage;
