import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router";

function Shop(){
    const [cards, setCards] = useState([]);
    const { addToCart } = useOutletContext();


    function handleClick(id) {}

    useEffect(() => {
    async function fetchproduct() {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      );
      const data = await response.json();
      const products = data.map((product) => ({
        id: product.id,
        name: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
      }));
      
      setCards(products);
      
    }
    fetchproduct();
  }, []);

  return (
    <div className="cardscontainer">
      {cards.map((card) => (
        <ProductCard
          name={card.name}
          imgurl={card.image}
          key={card.id}
          id={card.id}
          price={card.price}
          description={card.description}
          addToCart={addToCart}

        />
      ))}
    </div>
    )
}



export default Shop