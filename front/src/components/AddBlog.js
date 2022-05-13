import axios from 'axios'
import React, { useEffect, useState} from 'react'

function AddBlog() {

  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [password, setPassword] = useState(''); 


const handleFormSubmission = (e) =>{ 

    const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
   
    e.preventDefault();    

    const blog = {
        title: title, 
        content: content 
    }

     axios
        .post('http://localhost:3002/api/blogs/post', blog, config)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))

        setContent(""); 
        setTitle(""); 
}


return (
    <div className="w-full flex justify-center items-center mt-96 font-mono">
        <div className="m-auto max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <p className="text-3xl font-bold leading-7 text-center">Add Blog</p>
                <form onSubmit={handleFormSubmission} method="POST">
                    <div className="md:flex items-center mt-12">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="font-semibold leading-none">Title</label>
                            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-orange-100 border rounded border-gray-200" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="font-semibold leading-none">Phone</label>
                            <input type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-orange-100 border rounded border-gray-200"/>
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                            <label className="font-semibold leading-none">Picture</label>
                            <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-orange-100 border rounded border-gray-200"/>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="font-semibold leading-none">Content</label>
                            <textarea type="text" value={content} onChange={(e)=>{setContent(e.target.value)}} className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-orange-500 mt-4 bg-orange-100 border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-orange-500 rounded hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none">
                            Submit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddBlog