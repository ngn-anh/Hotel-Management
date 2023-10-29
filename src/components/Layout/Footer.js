import { Fragment } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <ul className={classes.inf}>
          <li>
            <div>LUXURY</div>
            <p>Hotels</p>
          </li>

          <li className={classes.phone}>+84888716903</li>
          <li className={classes.email}>luxury_hotel@gmail.com</li>
        </ul>
        <div className={classes.contact}>
          <p>About Us</p>
          <p>Contact</p>
          <p>Terms & Conditions</p>
        </div>
        <div className={classes.contact}>
          <a><span><ion-icon name="logo-facebook"></ion-icon></span>Facebook</a>
          <a><span><ion-icon name="logo-twitter"></ion-icon></span>Twitter</a>
          <a><span><ion-icon name="logo-instagram"></ion-icon></span>Instagram</a>
        </div>
        <div className={classes.subscribe}>
          <p>Subscribe to our newsletter</p>
          <form>
            <input type="email" placeholder="Email Address"></input>
            <button>OK</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
