import React from "react";
import { Link } from "react-router";


function NavBar({ cartCount }) {
  return (
    <div className="navbar">
      <div className="leftnav">
        <img src="" alt="logo" className="storelogo" />
        <h1 className="mystore">lumina</h1>
      </div>
      <div className="rightnav">
        <Link to="/"><button>Home</button></Link>
        <Link to="shop"><button>Shop</button></Link>
        <Link to="cart">
          <button style={{ position: 'relative' }}>
            Cart
            {cartCount > 0 && (
              <span style={{
                position: 'absolute', top: '-2px', right: '-2px',
                background: 'var(--accent)', color: '#fff',
                fontSize: '10px', fontWeight: 700,
                borderRadius: '99px', padding: '1px 5px',
                lineHeight: 1.5, pointerEvents: 'none'
              }}>{cartCount}</span>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar