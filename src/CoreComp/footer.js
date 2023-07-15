import { setBg } from "../utils/helper"

const Footer = (props) => {
    const color = setBg()
 return(<div className="footer" style={{ color }}>Remember {props.name} in your prayers like you do in your gossip!!!</div>)
}


export default Footer;