import { setBg } from "../utils/helper"
import { Link } from 'react-router-dom';
import  Footer  from "../CoreComp/Footer"

const ParentChildreen = (props) => {
  const color = setBg()
  return (<div className="link-wrap ">
    {props.childreen.map(item => (
      <div key={item.name}>
        <Link to={item.link} style={{ color }} >  {item.name} </Link>
      </div>))}
  </div>)
}



const IntroContent = (props) => {
  const backgroundcolor = setBg()
  return (<div>
    <div style={{ backgroundColor: backgroundcolor }} className="full-size">
      <div className="actor-greet horizontal-center">Hey I am  {props.name}</div>
      <div className="sub-heading horizontal-center mt-3">Below are my childreen</div>
      {props.childreen?.length > 0 ? <ParentChildreen childreen={props.childreen} /> : null}
      <Footer name={props.name}/>
    </div>
  </div>)
}


export default IntroContent;