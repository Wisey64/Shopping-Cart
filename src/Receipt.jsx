import React from "react";
import { useOutletContext } from "react-router";


function Receipt(){
    const {Cart,getGrandTotal} = useOutletContext()
     
    return (
        <>
        <div className="receiptdiv">
            <p className="total">your total is {getGrandTotal()}</p>
            <button className="checkoutbtn">checkout</button>
        </div>
        </>
    )
    
}







export default Receipt