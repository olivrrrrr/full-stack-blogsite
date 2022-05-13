import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

function Navbar() {
  
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  return (
    <nav className="flex justify-between items-center h-16 bg-white relative shadow-sm font-mono">
      <div className="pl-8">
          <h1 className="text-orange-500 text-2xl"><a className="no-underline text-inherit hover:text-orange-700" href="/" >Blogsite</a></h1> 
      </div>    
      <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
     {!isLoggedIn && <div className="text-center">
         <Link className="p-4" to="/login">
              My Blog
          </Link>
          <Link className="p-4" to="/addblog">
              Add Blog 
          </Link>
        </div>}
      <div className="pr-8 md:block hidden">
        <Link className="p-4" to="/login">
            Login
        </Link>
        <Link className="p-4 w-full items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 no-underline " to="/register">
            Register
        </Link>
      </div>
    </nav>  
  )
}

export default Navbar