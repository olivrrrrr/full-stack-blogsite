import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function AllBlogs() {
    // const id = localStorage.getItem("user")
    const [blogs, setBlogs] = useState(); 
   

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

    console.log(blogs)
    
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
                            <p className="mt-3 text-base text-gray-500 no-underline">{blog.content ? blog.content.split(" ").splice(0,20).join(" ") : blog.content}...</p>
                          </Link>       
                        </div>      
                    <div className="text-sm font-medium text-orange-600">
                      <p className="no-underline text-inherit">
                        {blog.name}
                      </p>
                    </div>
                
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={'#'}>
                      <span className="sr-only">{blog.name}</span>
                    {/* <img className="h-12 w-12 rounded-full" src={blog.user.picture} alt="" />  */}
                     </a>  
                  </div>
                  <div className="ml-0">
                    <p className="text-sm font-medium text-orange-600">
                      <a href={'#'} className="hover:underline">
                        {blog.author}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time>{new Date(blog.date).toDateString().split(' ')[1] + ' ' + new Date(blog.date).toDateString().split(' ')[2] + ' ' + new Date(blog.date).toDateString().split(' ')[3]}</time>
                      {/* <span aria-hidden="true">&middot;</span> */}
                      {/* <span>{post.readingTime} read</span> */}
                    </div>
                  </div>  
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