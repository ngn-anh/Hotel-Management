import { Fragment } from "react";
import Form from "../Form/Form";
import Intro from'../Room/Intro'
import Title from "../Form/Title";

const BookNow=()=>{
  return(
    <Fragment>
      <Title/>
      <Intro/>
      <Form/>
    </Fragment>
  )
}
export default BookNow;