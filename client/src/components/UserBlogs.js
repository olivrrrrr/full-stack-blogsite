import React, { useEffect, useState} from 'react'
import axios from 'axios'

function UserBlogs() {
    const id = localStorage.getItem("user")

    const [blogs, setBlogs] = useState()

    useEffect(() =>{
        axios
        .get(`http://localhost:3002/api/users/${id}`)
        .then((res)=>{
            console.log(res.data.blogs)
            setBlogs(res.data.blogs)
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
                hi
            </div>
        }

    </div>
  )
}

export default UserBlogs