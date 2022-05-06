import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const Registration = (newUser) => { 
    axios.post("http://localhost:3002/api/users/register", newUser)
    .catch(()=> alert('error adding new user'))
  }

  const handleFormSubmission = (event) => {
    event.preventDefault(); 

    const newUser = {
      username : username, 
      email: email, 
      password: password, 
    }

    Registration(newUser); 

    setUsername(""); 
    setPassword(""); 
  }

  return (
   <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-500">Register for an account</h2>
         
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="usernamae"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    // <div className="App">
    //   <h1>Register</h1>
    //   <form onSubmit={handleFormSubmission}>
    //     <input value={username} onChange={(e)=> setUsername(e.target.value)} type="username" placeholder="username" /> 
    //       <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="email" /> 
    //     <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" /> 
    //     <input type="submit" value="Register"/>
    //   </form> 
    // </div>
  );
}

export default Register