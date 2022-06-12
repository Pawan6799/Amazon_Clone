import "../style/Carts.css"
import { useState } from "react"
import Object from '../component/Object'
export default function Cart({inputState}) {
    // console.log(name);
    //{inputState}
    //let[obj , setObj]=useState(Object);
   // console.log(inputState)
    let filteredData=Object.filter(ele=>ele.type.includes(inputState.inputState.toLowerCase()));
     //console.log(filteredData);
    return (

        <>
            <div className="allcarts">
                {
                 filteredData.length==0?
                    Object.map((ele) => {
                        return (
                            <div className="crts">
                                <div className="infoimage">
                                    <img src={ele.image} className="img" />
                                </div>
                                <div className="itsparadiv">
                                    <div className="crtspara"> {ele.para}</div>
                                </div>
                                <div className="price">{ele.price}</div>
                                <div className="quantity">{ele.quantity}</div>
                                <div className="addcartbutton">
                                    <button onClick={()=>inputState.addToCart(ele)} className="itscart">Add To Cart</button>
                                </div>
                            </div>
                        )
                    })
                     :filteredData.map((ele) =>{
                        return (
                            <div className="crts">
                                <div className="infoimage">
                                    <img src={ele.image} className="img" />
                                </div>
                                <div className="itsparadiv">
                                    <div className="crtspara"> {ele.para}</div>
                                </div>
                                <div className="price">{ele.price}</div>
                                <div className="addcartbutton">
                                    <button onClick={()=>inputState.addToCart(ele)} className="itscart">Add To Cart</button>
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </>

    )

}

