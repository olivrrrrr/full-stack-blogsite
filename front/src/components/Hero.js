import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

    const navigate = useNavigate(); 

  return (
    <div>
        <div className="mt-40 mx-auto max-w-7xl px-4 sm:mt-48 sm:px-6 font-mono">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Articles to enrich your</span>
                <span className="block text-orange-600">knowledge</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Discover stories, thinking, and expertise from writers on all things technology 
              </p>
              <button onClick={()=>navigate('/login')} className="p-4 w-1/4 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 no-underline mt-10 ">
                  Start Reading
              </button>
            </div>
          </div>
    </div>
  )
}

export default Hero