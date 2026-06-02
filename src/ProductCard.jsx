import { useState } from "react";
import React from "react";


function ProductCard({name, imgurl, id, price,description, addToCart}){

const [selectedQuantity, setSelectedQuantity] = useState(1);

    function handleAddToCart() {
  addToCart(
    {
      id,
      name,
      price,
    },
    selectedQuantity
  );
}


    return(
    <>
      <div className="card">
        <img src={imgurl} alt={name} className="productimg" />
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <h2 className="price">{price}</h2>
        <div className="quantitydiv">
            <input type="number" className="quantityinput" 
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))} />
            <button className="increment">+</button>
            <button className="decrement">-</button>
        </div>
        <button className="addtocart"  onClick={handleAddToCart} >AddtoCart</button>
        
      </div>
    </>
    )
}

export default ProductCard