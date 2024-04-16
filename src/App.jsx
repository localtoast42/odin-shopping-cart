import './App.css';
import CardContainer from './components/CardContainer';

function App() {

  return (
    <>
      <nav className='flex p-6 bg-sky-500'>
        <div className='flex gap-2'>
          <h2>Home</h2>
          <h2>Shop</h2>
        </div>
      </nav>
      <CardContainer />
    </>
  )
}

export default App
