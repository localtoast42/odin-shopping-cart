import './App.css';
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function App() {

  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <nav className='flex p-6 bg-sky-500'>
        <div className='flex gap-2'>
          <Link to="">Home</Link>
          <Link to="shop">Shop</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default App
