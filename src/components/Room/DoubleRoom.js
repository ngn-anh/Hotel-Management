
import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import Room from "./Room";

const DoubleRoom=()=>{
  return <Room  arrImages={[picture1, picture2, picture3]} type="Double room" price="262"/>
}

export default DoubleRoom;