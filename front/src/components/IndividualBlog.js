import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import { useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
  
      <div className="relative px-4 sm:px-6 lg:px-8 font-mono">
        <div className='flex-shrink-0 aspect-w-16 aspect-h-9'>
            <img className="h-64 w-64  md:w-1/2 md:h-96 rounded-lg object-cover m-auto" src={individualBlog.picture} alt="" />
        </div>
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {individualBlog.title}
              <FontAwesomeIcon icon="fas fa-edit" />
            </span>
             <span className=" md:flex block text-base text-center text-orange-600 font-semibold tracking-wide space-between gap-x-96 uppercase">
              <p> Author: {individualBlog.author}</p>
              <p>{new Date(individualBlog.date).toDateString()}</p>
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
             Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p>
          </div>
        </div>
      </div>
    // <div className='m-10 grid'>
    //      <img className="h-96 w-1/2 rounded-lg object-cover m-auto" src={individualBlog.picture} alt="" />
    //      <p className=" text-4xl text-center">{individualBlog.title}</p>
    //      <div className='justify-center flex mx-96 space-x-96 '>
    //             <p >Author: {individualBlog.author}</p>
    //             <p>{new Date(individualBlog.date).toDateString()}</p>
    //      </div>
    //      <p className='m-auto mt-10 w-1/2'>{individualBlog.content}</p>
    // </div>
  )
}

export default IndividualBlog