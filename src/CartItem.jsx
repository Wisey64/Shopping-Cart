import React from "react";
import { useOutletContext } from "react-router";
function CartItem({name,id,price,quantity,imgurl,
    decreaseCartQuantity,increaseCartQuantity,updateCartQuantity}){
        const {Cart} = useOutletContext()
    return(<>
    <div className="cartitem">
        <img src={imgurl} alt={name} className="productimg" />
        <h2 className="name">{name}</h2>
        <h2 className="price">{price}</h2>
        <div className="quantitydiv">
            <input type="number" className="quantityinput" 
            value={quantity}
            onChange={(e) => updateCartQuantity(id, Number(e.target.value))} />
            <button className="increment" onClick={() => increaseCartQuantity(id)} >+</button>
            <button className="decrement" onClick={() => decreaseCartQuantity(id)}>-</button>
            <p className="subtotal">your sub total is{price*quantity}</p>
            
        </div>
    </div>
        </>)
}


export default CartItem