import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="App">
        <header>
            <Header/>
        </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/dashboard" element={<Dashboard />}/> */}
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
