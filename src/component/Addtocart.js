import "../style/Carts.css"
//{ cart }
export default function Addtocart({cart}) {
    return (
        <>
        {/* <h1>headerse</h1> */}
            <div className="allcarts">

                {
                    cart.cart.length == 0 ?
                        <div>There is no Product Added in Cart</div>
                        : cart.cart.map((ele) => {
                            return (
                                <div className="crts">
                                    <div className="infoimage">
                                        <img src={ele.image} className="img" />
                                    </div>
                                    <div className="itsparadiv">
                                        <div className="crtspara"> {ele.para}</div>
                                    </div>
                                    <div className="price">{ele.price}</div>
                                    <div className="quantity">Quantity : {ele.quantity}</div>
                                    <div className="addcartbutton">
                                        <button className="itscart" onClick={()=>cart.addToCart(ele)}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>


        </>
    )
}