import "../style/Subheaders.css"
import {Link} from "react-router-dom"
export default function Subheader(){
//console.log(text)
    return(
        <div className="shead">
            <div className="Best0">All</div>
            <div className="Best">Best Seller</div>
            <Link to="/laptoppage" style={{textDecoration :"none"}}><div className="BestLap">Laptops</div></Link>
            <div className="Best">Mobiles</div>
            <div className="Best1">Customer Service</div>
            <div className="Best1">Today's Deals</div>
            <div className="Best">Electronics</div>
           <Link to ="/elctropage" style={{textDecoration :"none"}}><div className="Best">Smartled</div></Link>
            <div className="Best1">New Releases</div>
            <div className="emoji">&#128522;</div>
            <div className="Best2"> Shopping Made Easy | Download App</div>
            
            
        </div>
    )
}