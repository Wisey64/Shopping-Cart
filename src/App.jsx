import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Home from './Home'
import Shop from './Shop'
import { Outlet } from 'react-router'

function App(){
  const [Cart,setCart] = useState([])

  function updateCartQuantity(id,quantity){
    setCart(prevCart => prevCart.map((item)=> item.id === id
        ? {...item, quantity: quantity}:item)
         )
    }

  function getGrandTotal() {
  return Cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

  function increaseCartQuantity(id){

        setCart(prevCart => prevCart.map((item)=> item.id === id
        ? {...item, quantity: item.quantity +1}:item)
         )
    }

    function decreaseCartQuantity(id){
        setCart(prevCart => prevCart.map((item)=> item.id === id && item.quantity >1
        ? {...item, quantity: item.quantity -1}:item)
         )
        
    }

  function addToCart(product, quantity){
        setCart((prevCart)=>{
          const existing = prevCart.find((item)=> item.id === product.id)

          if(existing) {
            return prevCart.map((item) => 
            item.id === product.id
          ? {...item, quantity: item.quantity + quantity}
          : item
        );
        
        } else{
          return [...prevCart, {...product, quantity}]
          }
        })
  }
  return(
    <>
      <NavBar></NavBar>
      <Outlet context={{ addToCart,increaseCartQuantity,decreaseCartQuantity,
        updateCartQuantity,getGrandTotal, Cart }}></Outlet>

    </>
  )
}

export default App
