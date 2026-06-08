import React from "react";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router";
import Receipt from "./Receipt";
function Cart(){
    const { Cart,increaseCartQuantity,decreaseCartQuantity
      ,updateCartQuantity,getGrandTotal,removeFromCart } = useOutletContext();

    return(
     <>
        <div className="cartitemconstainer">
            <h1 className="cart-heading">Your Cart</h1>
            <p className="cart-subheading">{Cart.length} item{Cart.length !== 1 ? 's' : ''}</p>
            <div className="cart-items-list">
                {Cart.map((item) => (
                <CartItem
                name={item.name}
                key={item.id}
                imgurl={item.imgurl}
                id={item.id}
                price={item.price}
                quantity={item.quantity}
                increaseCartQuantity={increaseCartQuantity}
                decreaseCartQuantity={decreaseCartQuantity}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart} />
                ))}
            </div>
            <Receipt></Receipt>
        </div>
           </>
        )
}

export default Cart