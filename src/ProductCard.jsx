
import React from "react";


function ProductCard({name, imgurl, id, price,description}){
    return(
    <>
      <div className="card">
        <img src={imgurl} alt={name} className="productimg" />
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <h2 className="price">{price}</h2>
        <div className="quantitydiv">
            <input type="number" className="quantityinput" />
            <button className="increment">+</button>
            <button className="decrement">-</button>
        </div>
        <button className="addtocart">AddtoCart</button>
        
      </div>
    </>
    )
}

export default ProductCard