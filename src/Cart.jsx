import React from "react";
import CartItem from "./CartItem";
import { useOutletContext } from "react-router";
import Receipt from "./Receipt";
function Cart(){
    const { Cart,increaseCartQuantity,decreaseCartQuantity,updateCartQuantity,getGrandTotal } = useOutletContext();

    return(
           <>
              <div className="cartitemconstainer">
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
          
          
          

        />
      ))}
        <Receipt></Receipt>
              </div>
           </>
        )
}

export default Cart