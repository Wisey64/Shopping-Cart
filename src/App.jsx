import { useState } from 'react'
import './App.css'
import NavBar from './navbar'
import Home from './Home'
import Shop from './Shop'
import { Outlet } from 'react-router'

function App(){
  const [Cart,setCart] = useState([])

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
      <Outlet context={{ addToCart }}></Outlet>

    </>
  )
}

export default App
