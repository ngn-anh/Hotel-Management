import { Fragment } from "react"
import Intro from "../Room/Intro"
import HeroImage from "../Layout/HeroImage"
import SingleRoom from "../Room/SingleRoom"
import DoubleRoom from "../Room/DoubleRoom"
import TwinRoom from "../Room/TwinRoom"
import Testimonials from "../Room/Testimonials"

const HomePage=(props)=>{
  return (
    <Fragment>
      <HeroImage onBookClick={props.onBookClick}/>
      <Intro/>
      <SingleRoom />
      <DoubleRoom />
      <TwinRoom />
      <Testimonials/>
    </Fragment>
  )
}

export default HomePage