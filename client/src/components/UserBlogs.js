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
        {blogs.map(blog=>{
               return <div>
                    {blog.title}
                </div>
        })}

    </div>
  )
}

export default UserBlogs