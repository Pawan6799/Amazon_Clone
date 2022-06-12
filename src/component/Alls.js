import Cart from '../component/Cart'
import Content from '../component/Content'

export default function Alls({setinputState}){
    
    return (
        <div className="alllls">
            <Content setinputState={setinputState.setinputState}/>
            <Cart inputState={setinputState.inputState}/>
        </div>
    )
}