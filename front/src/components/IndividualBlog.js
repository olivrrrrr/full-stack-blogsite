import axios from 'axios'; 
import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch} from 'react-redux';
import { useLocation} from "react-router";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"

function IndividualBlog() {

    const [individualBlog, setIndividualBlog ] = useState(''); 
    const [editMode, setEditMode] = useState(false); 
    const [username, setUsername] = useState('');
    const [title, setTitle] = useState(''); 

    const [content, setContent] = useState(''); 
    const [picture, setPicture] = useState(''); 
    const [summary, setSummary] = useState(''); 

   
    const location = useLocation();
    const navigate = useNavigate(); 
    const path = location.pathname.split("/")[2];

    const user = useSelector((state)=> state.user); 
    
    useEffect(()=>{
        axios
            .get(`http://localhost:3002/api/blogs/${path}`)
            .then(res=>{
              // console.log(res.data.title)
              setTitle(res.data.title)
              setContent(res.data.content)
              setIndividualBlog(res.data)
            }); 
    }, [path])

  
   
    // const handleDelete = (e) => {
    //   e.preventDefault(); 
    //    axios.delete(`http://localhost:3002/api/blogs/${path}`)
    //    .then(()=>navigate("http://localhost:3000/allblogs")
    // }

    // }

    const deleteRequest = async () => {
        const res = await axios.delete(`http://localhost:3002/api/blogs/${path}`).catch(err=>console.log(err)); 
        const data = await res.data;
        return data; 
    }

    const updateRequest = async () => {
      await axios.put(`http://localhost:3002/api/blogs/edit/${individualBlog._id}`, { title: title, content: content })   
      .catch(err=>console.log(err)); 
    
    }

    const handleDelete = () => {
          deleteRequest().then(()=>navigate("/allblogs"))
    }

    const handleUpdate = (e) => {
     e.preventDefault(); 
     updateRequest()
     setEditMode(false);
    }

    const handleEdit = () =>{
      
      setEditMode(true); 
    }
  //  console.log(individualBlog)
  return (
    
      <div className="relative px-4 mt-10 sm:px-6 lg:px-8 font-mono">
       {editMode ?  

       <>
       <div className='flex-shrink-0 aspect-w-16 aspect-h-9'>
            <img className="h-auto w-64  md:w-1/2 md:h-96 rounded-lg object-cover m-auto" src={individualBlog.picture} alt="" />
        </div>
        <div className="text-lg max-w-prose mx-auto">
            <div className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
               <input type="text" placeholder="Title..." value={title} onChange={(e)=>{setTitle(e.target.value)}} className="w-full border-none focus:outline-none text-4xl" />
              <div className='inline-block sm:w-full'>
                    {user.username == individualBlog.author ? 
                      <div className='flex'>
                          <AiFillEdit onClick={handleUpdate} />
                          <AiFillDelete color="red" onClick={handleDelete}/>
                    </div> : <></>}
              </div>
            </div>
      
             <div className=" md:flex block text-base text-center text-orange-600 font-semibold tracking-wide space-between gap-x-96 uppercase">
              <p> Author: {individualBlog.author}</p>
              <p>{new Date(individualBlog.date).toDateString()}</p>
            </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <textarea type="text" placeholder='What is on your mind..?' value={content} onChange={(e)=>{setContent(e.target.value)}} className="w-full h-96 border-none focus:outline-none text-2xl"/> 
          </div>
          <button onClick={handleUpdate}>
            Update
          </button>
        </div> 
      </>
          :
       <>
       <div className='flex-shrink-0 aspect-w-16 aspect-h-9'>
            <img className="h-auto w-64  md:w-1/2 md:h-96 rounded-lg object-cover m-auto" src={individualBlog.picture} alt="" />
        </div>
        <div className="text-lg max-w-prose mx-auto">
            <div className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <h1>{title}</h1>
              <div className='inline-block sm:w-full'>
                    {user.username == individualBlog.author ? 
                      <div className='flex'>
                          <AiFillEdit onClick={handleEdit} />
                          <AiFillDelete color="red" onClick={handleDelete}/>
                    </div> : <></>}
              </div>
            </div>
      
             <div className=" md:flex block text-base text-center text-orange-600 font-semibold tracking-wide space-between gap-x-96 uppercase">
              <p> Author: {individualBlog.author}</p>
              <p>{new Date(individualBlog.date).toDateString()}</p>
            </div>

          {/* <p className="mt-8 text-xl text-gray-500 leading-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p> */}
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          {/* <p>
            Faucibus commodo massa rhoncus, volutpat. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
             Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p> */}
          <p>{content}</p>
          </div>
        </div> 
       </>}
    </div>
  )
}

export default IndividualBlog