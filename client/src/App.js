import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard'
import UserBlogs from './components/UserBlogs'
import PostBlog from './components/PostBlog';

import Logout from './components/Logout';
import { useNavigate } from 'react-router-dom';
import AddBlog from './components/AddBlog';

export const AuthContext = React.createContext()

const initialState = {
  isAuthenticatied: false, 
  user: null, 
  token: null
} 

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
     // console.log()
      // localStorage.setItem("user", action.payload.data);
      // localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        // user: action.payload.user,
        // token: action.payload.token
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
      
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const user = localStorage.getItem('user') || null
    const token = localStorage.getItem('token') || null

    if(user && token){
    
      dispatch({
        type: 'LOGIN',
        payload: {
          user,
          token
        }

      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{state, dispatch}}> 
    <div className="App">
    
        <header>
            {/* {!state.isAuthenticated ?  <Header/> : <Logout/>} */}
            <Navbar/>
      
        </header>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/dashboard" element={<Dashboard />}/> */}
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/myBlogs" element={<UserBlogs />}/>
          <Route path="/addblog" element={<PostBlog/>}/>
      
           </Routes>
      </BrowserRouter>
     
    </div>
     
    </AuthContext.Provider>
  );
}

export default App;
