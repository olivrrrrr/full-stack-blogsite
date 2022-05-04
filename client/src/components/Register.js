import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const Registration = (newUser) => { 
    axios.post("http://localhost:3001/api/users/signup", newUser)
    .catch(()=> alert('error adding new user'))
  }

  const handleFormSubmission = (event) => {
    event.preventDefault(); 

    const newUser = {
      username : username, 
      email: email, 
      passwordHash: password, 
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
          <input value={email} onChange={(e)=> setPassword(e.target.value)} type="email" placeholder="email" /> 
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" /> 
        <input type="submit" value="Register"/>
      </form> 
    </div>
  );
}

export default Register