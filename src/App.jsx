import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {

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
