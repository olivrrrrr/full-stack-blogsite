import logo from './logo.svg';
import './App.css';
import {react, useState} from 'react'
import axios from 'axios'

function App() {

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const Registration = (newUser) => { 
    axios.post("http://localhost:3001/api/users", newUser)
    .catch(()=> alert('error adding user'))
  }

  const handleFormSubmission = (event) => {
    event.preventDefault(); 

    const newUser = {
      username : username, 
      passwordHash : password, 
    }

    Registration(newUser); 

    setUsername(""); 
    setPassword(""); 
  }



  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={handleFormSubmission}>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type="username" placeholder="username" /> 
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" /> 
        <input type="submit" value="Register"/>
      </form> 
    </div>
  );
}

export default App;
