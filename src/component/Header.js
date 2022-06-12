import "../style/Headers.css"
 import {Link} from "react-router-dom"
function Header({setinputState}) {
    //{setinputState}
    console.log(setinputState.cart);
     function manage(e){
         let {value}=e.target
         console.log(value);
         setinputState.setinputState(value)

     }
    return (
      <div className="header">
          <div className="images">
              <img src="/image/logo.jpg" className="imagebox"/>
          </div>
          <div className="Adress">
              <div className="Hello">Hello</div>
              <div className="Selectadd">
                 <div className="Icon"><i class="fa fa-map-marker"></i></div>
                 <div className="Selects">Select your address</div>
              </div>
          </div>
          <div className="Searchbox">
              <div className="Searchbar">
               <input type="text" className="Searchinput" placeholder="Search Your Products" onChange={manage}/>
              </div>
              <div className="Searchicon">
              <i class="fa fa-search"></i>
              </div>
          </div>
          <div className="Flag">
            <img src="/image/india.png" className="imageindiabox"/> 
          </div>
          <div className="Accounts">
              <Link to="/loginpage" style={{textDecoration :"none"}}><div className="Signin">Hello, Sign in</div></Link>
              <div className="AccountList">Account & Lists</div>
          </div>
          <div className="Returns">
              <div className="Signin">Returns</div>
              <div className="AccountList">& Orders</div>
          </div>
          <div className="Cart">
               <span><img src="/image/download.png" className="imagecart"/> </span>
               
               <Link to="/addcart" style={{textDecoration :"none"}}><div className="Carts">Cart</div></Link>
              <div className="count">{setinputState.cart.length}</div>
              

          </div>

       
      </div>
    );
}
export default Header