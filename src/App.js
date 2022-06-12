
import { useState } from 'react';
import Login from './component/Login';
//import Alls from './component/Alls';
import Cart from './component/Cart';
import Header from './component/Header';
import Subheader from './component/Subheader';
//import Alllaptops from './component/Alllaptops';
//import Allelectronics from './component/Allelectronics';
import Electronics from './component/Electronics';
import Laptop from './component/Laptop';
import Addtocart from './component/Addtocart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // This state is used for filtering on the search box
 let[inputState, setinputState]=useState('normal');
 // this use for adding in cart component
 // step :1 => for add to cart
 const[cart, setCart]=useState([]); // we are making this state here so that we can use it on any of the other child component
// function add to cart
  // step :2 => making logic for add to cart 
 function addToCart(product){
 console.log("clicked",product);

  // now using Find method to check whether the product exit in cart or not.
  const productCart=cart.find((ele)=>ele.id === product.id);
  // for empty cart array this find method will not work.

  if(productCart){
 // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.

    setCart(cart.map((ele)=>ele.id==product.id ? {...productCart, quantity: productCart.quantity+1}:ele))
  }else{
     // spread opertor
      
      // [...cart]
    setCart([...cart,{...product, quantity:1}])
  }
}

  return (
    <div className="App">
    
     <BrowserRouter>
     <Header setinputState={{setinputState, cart}}/>
     <Subheader/>
      <Routes>
      
          <Route path="/" element={<Cart inputState={{inputState, addToCart}}/>} />
          <Route path="/loginpage" element={<Login/>} /> 
          <Route path="/afterlogin" element={<Cart/>} />
          <Route path="/addcart" element={<Addtocart cart={{cart, addToCart}}/>} />
          <Route path="/laptoppage" element={<Laptop/>} />
          <Route path="/elctropage" element={<Electronics/>} />

          
          

      </Routes>
      {/* <Mobile/> */}
    </BrowserRouter>
     

     

    </div>
  );
}

export default App;

//import './App.css';
//import Header from './component/Header';
//import Subheader from './component/Subheader';
 //import Cart from './component/Cart';
//import Content from './component/Content';
// let name="BUY THIS PRODUCT";
 // let con={all:"All", best:"Best Sellers" , lap:"Laptops"};
 //let con="Best Sellers";
 //let tet="Laptop";
// <Subheader/>
//<Cart pawan={nam}/>
//<Content name={name} /
//  let headerArr =Object.map((ele)=>{
//    return(
//      <>
//      <Cart info={ele}/>
//      </>
//    )
//  })
{/* {headerArr} */}

     {/* <Login/> */}
    {/* <Content names={{name,con}} /> */}
     

     {/* <Subheader con={con}/> */}
     {/* <Cart name={name}/> */}