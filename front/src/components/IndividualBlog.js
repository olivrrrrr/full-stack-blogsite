import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import { useLocation } from "react-router";


function IndividualBlog() {

    const [individualBlog, setIndividualBlog ] = useState(''); 
     const [editMode, Edit] = useState(false); 
    const [username, setUsername] = useState('');
   
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    
    useEffect(()=>{
        axios
            .get(`http://localhost:3002/api/blogs/${path}`)
            .then(res=>setIndividualBlog(res.data)); 
    }, [])

    console.log(individualBlog)
  return (
    <div className='m-10 grid'>
         <img className="h-96 w-1/2 rounded-lg object-cover m-auto" src={individualBlog.picture} alt="" />
         <p className=" text-4xl text-center">{individualBlog.title}</p>
         <div className='justify-center flex mx-96 space-x-96 '>
                <p >Author: {individualBlog.author}</p>
                <p>{new Date(individualBlog.date).toDateString()}</p>
         </div>
         <p className='m-auto mt-10 w-1/2'>{individualBlog.content}</p>
    </div>
  )
}

export default IndividualBlog