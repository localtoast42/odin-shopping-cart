import './App.css';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <nav className='flex p-6 bg-sky-500'>
        <div className='flex gap-2'>
          <h2>Home</h2>
          <h2>Shop</h2>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default App
