import './App.css';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';



function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  
  return (
    <>
      <header>
        <Navbar/>
      </header>
    </>
  );
}

export default App;
