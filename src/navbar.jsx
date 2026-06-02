import React from "react";
import { Link } from "react-router";


function NavBar(){
    return(
    <>
        <div className="navbar">
            <div className="leftnav">
                <img src="" alt="logo" className="storelogo" />
                <h1 className="mystore">mystore</h1>
            </div>
            <div className="rightnav">
                <Link to="/"><button>Home</button></Link>
                <Link to="shop"><button>Shop</button></Link>
                <Link to="cart"><button>Cart</button></Link>
            </div>
        </div>
    </>
    ) 
}

export default NavBar