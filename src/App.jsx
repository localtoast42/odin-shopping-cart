import './App.css';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-items'>
          <div className='logo'></div>
          <div className='nav-links'>
            <Link to="">Home</Link>
            <Link to="shop">Shop</Link>
          </div>
          <div className='cart'></div>
        </div>
      </nav>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App
