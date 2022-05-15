import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBlogs() {
    // const id = localStorage.getItem("user")
    const [blogs, setBlogs] = useState()

    useEffect(() =>{
        axios
        .get(`http://localhost:3002/api/blogs`)
        .then((res)=>{
            console.log(res.data)
            setBlogs(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    
  return (
    <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {blogs ? blogs.map(blog=>{
               return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden" key={blog._id}>
                   <div className="flex-shrink-0">
                       <img className="h-48 w-full object-cover" src={blog.picture} alt="" />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <Link to={`/blogs/${blog._id}`} className="block mt-2 no-underline">
                            <p className="text-xl font-semibold text-orange-600 hover:underline">{blog.title}</p>
                            <p className="mt-3 text-base text-gray-500 no-underline">{blog.summary ? blog.summary.split(" ").splice(0,10).join(" ") : blog.summary}...</p>
                          </Link>       
                        </div>
                    </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-orange-600">
                      <h8 className="no-underline text-inherit">
                        {blog.name}
                      </h8>
                    </p>
                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={blog.datetime}>{blog.date.split("T")[0]}</time>
                    </div> */}
                  </div>
                </div>
             </div>
        }) :
            <div>
            {" "}
            </div>
        }
        </div>
    </div>
  )
}

export default AllBlogs