import classes from "./Form.module.css";
const Form = () => {
  return (
    <form className={classes.container}>
      <div>
        <label for="name">Name:</label>
        <div>
          <input type="text" id="name" />
        </div>
      </div>
      <div>
        <label for="email">Email Addess:</label>
        <div>
          <input type="email" id="email" />
        </div>
      </div>
      <div>
        <label for="message">Message:</label>
        <div>
          <input type="text" id="message" className={classes.message} />
        </div>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default Form;
