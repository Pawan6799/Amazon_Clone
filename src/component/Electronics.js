import React from "react"
import data from "./Object"
import Electronicscomp from "./Electronicscomp"
export default function Laptop(){
    let electronicData = data.filter(ele=>ele.type=="smarttv")
    return(
        <Electronicscomp data={electronicData}/>

    )
}