import React from "react";
import { useOutletContext } from "react-router";


function Receipt() {
  const { Cart, getGrandTotal } = useOutletContext();
  return (
    <div className="receiptdiv">
      <h3 className="receipt-title">Order Summary</h3>
      {Cart.map(item => (
        <div className="receipt-row" key={item.id}>
          <span>{item.name.substring(0, 28)}{item.name.length > 28 ? '…' : ''} ×{item.quantity}</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      ))}
      <div className="receipt-total">
        <span>Total</span>
        <span>${getGrandTotal().toFixed(2)}</span>
      </div>
      <button className="checkoutbtn">Proceed to Checkout</button>
    </div>
  );
}







export default Receipt