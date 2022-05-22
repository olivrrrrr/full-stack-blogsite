import axios from 'axios'
import React, { useEffect, useState} from 'react'

function AddBlog() {

  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState(''); 
  const [picture, setPicture] = useState(''); 
  const [summary, setSummary] = useState(''); 


const handleFormSubmission = (e) =>{ 

    const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
   
    e.preventDefault();    

    const blog = {
        title: title, 
        summary: summary, 
        content: content,
        picture: picture
    }

     axios
        .post('http://localhost:3002/api/blogs/post',
        blog
        , config)
        .then(res=> console.log(res))
        .catch(err=> console.log(err))

        setContent(""); 
        setPicture(""); 
        setTitle(""); 
        setSummary("")
}


return (
    <div className="w-full flex justify-center items-center mt-96 font-mono">
        <div className="m-auto max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                <p className="text-3xl font-bold leading-7 text-center">Add Blog</p>
                <form onSubmit={handleFormSubmission} method="">
                    <div className="md:flex items-center mt-12">
                        <div className="w-full md:w-1/2 flex flex-col">
                            <label className="font-semibold leading-none">Title</label>
                            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-white-100 border rounded border-gray-200" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="font-semibold leading-none">Summary</label>
                            <input type="text" value={summary} onChange={(e)=>setSummary(e.target.value)} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-white-100 border rounded border-gray-200"/>
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="w-full flex flex-col">
                            <label className="font-semibold leading-none">Picture</label>
                            <input type="text" value={picture} onChange={(e)=>{setPicture(e.target.value)}} className="leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-white-100 border rounded border-gray-200"/>
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="font-semibold leading-none ">Content</label>
                            <textarea type="text" value={content} onChange={(e)=>{setContent(e.target.valvalue)}} className="h-40  leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-500 mt-4 bg-white-100 border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-orange-500 rounded hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none">
                            Publish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    // <div className="w-full mx-auto">
    //      <form onSubmit={handleFormSubmission} className="grid justify-center p-16 space-y-3">
    //         <input type="text" placeholder="Title..." value={title} onChange={(e)=>{setTitle(e.target.value)}} className="py-3 px-5 border-none  focus:outline-none text-4xl" />
    //         <input type="text" placeholder='What is on your mind..?' value={content} onChange={(e)=>{setContent(e.target.value)}} className="border-none focus:outline-none text-2xl"/>
    //      </form>
    //      <div className="w-full">
    //         <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-orange-500 rounded hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none">
    //         Publish
    //         </button>
    //         <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-orange-500 rounded hover:bg-orange-700 focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 focus:outline-none">
    //             +
    //         </button>
    //      </div>
    // </div>
  )
}

export default AddBlog