import React, { useEffect, useState} from 'react'
import axios from 'axios'

function AllBlogs() {
    const id = localStorage.getItem("user")
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
    <div>
        {blogs ? blogs.map(blog=>{
               return <div key={blog._id}>
                    {blog.title}
                </div>
        }) :
            <div>
            {" "}
            </div>
        }

    </div>
  )
}

export default AllBlogs