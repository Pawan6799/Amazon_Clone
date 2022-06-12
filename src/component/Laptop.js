import React from "react"
import data from "./Object"
import Laptopcomp from "./Laptopcomp"
export default function Laptop(){
    let laptopData = data.filter(ele=>ele.type=="laptop")
    return(
        <Laptopcomp data={laptopData}/>

    )
}