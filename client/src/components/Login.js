import {React, useState} from 'react'
import axios from 'axios'


function Login() {

    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');

    const login = (user) => { 
    axios.post("http://localhost:3002/api/login", user)
    // .then(navigate("/userpage"))
    .catch(()=> alert('error adding user'))
    }


    const handleFormSubmission = (e) => {
        e.preventDefault(); 

        const user = {
            username: username, 
            password: password
        }

        login(user)

    }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmission}>
        <input value={username} onChange={(e)=> setUsername(e.target.value)} type="username" placeholder="username" /> 
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" /> 
        <input type="submit" value="Register"/>
      </form> 
    </div>
  )
}

export default Login