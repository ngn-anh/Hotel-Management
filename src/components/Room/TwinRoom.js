import picture1 from "../../assets/picture1.jpg";
import picture2 from "../../assets/picture2.jpg";
import picture3 from "../../assets/picture3.jpg";
import Room from "./Room";

const TwinRoom=()=>{
  return <Room  arrImages={[picture1, picture2, picture3]} type="Twin room" price="150"/>
}

export default TwinRoom;