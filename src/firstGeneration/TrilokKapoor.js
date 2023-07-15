import { setBg } from "../utils/helper"

const TrilokKapoor = () => {
    const backgroundcolor = setBg()
    return(
      <div style={{backgroundColor: backgroundcolor}} className="full-size">
           <div className="actor-greet horizontal-center">Hey I am Trilok Kapoor</div>
           <div className="sub-heading horizontal-center">Below are my childreen</div>
      </div>

    )
}

export default TrilokKapoor;