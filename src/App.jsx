import './App.css';
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-items'>
          <div className='logo'></div>
          <div className='nav-links'>
            <NavLink to="">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
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
