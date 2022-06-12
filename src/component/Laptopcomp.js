import "../style/Carts.css"
export default function Laptopcomp({ data }) {
    return (
        <div className="allcarts">
            {
                data.map((ele) => {
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
                                <button className="itscart">Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )

}