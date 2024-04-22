import './App.css';
import Logo from './assets/tag.svg';
import Cart from './assets/cart-outline.svg';
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-items'>
          <div className='nav-left'>
            <img src={Logo} alt="" />
            <NavLink to="">Home</NavLink>
            <NavLink to="shop">Shop</NavLink>
          </div>
          <NavLink to="checkout" className={'cart'}>
            <div>4</div>
            <img src={Cart} alt="" />
          </NavLink>
        </div>
      </nav>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

export default App
