import "../style/Contents.css"
import Subheader from "../component/Subheader"
import Header from "./Header"
export default function Content({setinputState}){
    return(
        <div className="contnt">
            <Header setinputState={setinputState}/>
            <Subheader/>
        </div>

    )
}