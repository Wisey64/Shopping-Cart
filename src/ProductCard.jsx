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
      imgurl
    },
    selectedQuantity
  );
}

function handleincrement(){
     
     setSelectedQuantity(prev => prev+1)

}

function handledecrement(){

    

    if(selectedQuantity===1) return
    else{setSelectedQuantity(prev => prev-1)}

     
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
            onChange={(e) =>{if(e.target.value<1) return
            else setSelectedQuantity(Number(e.target.value))}} />
            <button className="increment" onClick={handleincrement} >+</button>
            <button className="decrement" onClick={handledecrement}>-</button>
        </div>
        <button className="addtocart"  onClick={handleAddToCart} >AddtoCart</button>
        
      </div>
    </>
    )
}

export default ProductCard