import './App.css';
import Logo from './assets/tag.svg';
import Cart from './assets/cart-outline.svg';
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  console.log(shoppingCart);

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
            <div>{shoppingCart.length}</div>
            <img src={Cart} alt="" />
          </NavLink>
        </div>
      </nav>
      <div className='content'>
        <Outlet context={ [shoppingCart, setShoppingCart] } />
      </div>
    </>
  )
}

export default App
