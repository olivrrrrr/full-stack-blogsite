import {React, useEffect, useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../App";

function Login() {
    const navigate = useNavigate(); 
    
    const initialState = {
      email: "",
      password: "",
      isSubmitting: false,
      errorMessage: null
    };

    const [data, setData] = useState(initialState);
    // const [email, setEmail] = useState(''); 
    // const [password, setPassword] = useState('');
   
    const { dispatch } = useContext(AuthContext);
 
  
  
  const handleInputChange = event => {
      setData({
        ...data,
        [event.target.name]: event.target.value
      });
    };


    // const login = (user) => { 
    //   axios.post("http://localhost:3002/api/login", user)
    //     .then(()=>{
    //       navigate("/");
    //     }).
    //     then(resJson => {
    //     dispatch({
    //         type: "LOGIN",
    //         payload: resJson
    //     })
    //   })
    //     .catch(()=> alert('error loggging in'))    
    // }
    
    const handleFormSubmission = (e) => {
        e.preventDefault(); 

        setData({
          ...data,
          isSubmitting: true,
          errorMessage: null
        });

        const user = {
            email: data.email, 
            password: data.password
        }

        axios.post("http://localhost:3002/api/login", user)
        .then((res)=>{
          console.log(res)
           dispatch({
            type: "LOGIN",
            payload: res
        })
          navigate("/");
        })
        .catch((error)=> {
        alert('error loggging in')
           setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText
        });
      })    
    }


  return (

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-orange-500">Sign in to your account</h2>
         
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleFormSubmission} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={data.email} 
                    onChange={handleInputChange} 
                    type="email"
                    autoComplete="email"
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
                    value={data.password} 
                    onChange={handleInputChange}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                {/* <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div> */}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login