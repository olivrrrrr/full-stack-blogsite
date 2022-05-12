const express = require('express'); 
const blogRouter = express.Router(); 
const jwt = require('jsonwebtoken'); 
const { default: mongoose } = require('mongoose');
const Blog = require('../models/Blog'); 
const User = require('../models/User')

// GET: all blogs
blogRouter.get('/', async (req, res) => {

try {
    const blogs = await Blog.find({})
    if(blogs){
       res.json(blogs).populate('user'); 
    } else {
      return res.status(404).json("No Blogs found"); 
    }
  } catch (err) {
     // return res.status(500).json({message: err})
  }
})

// GET: blogs by id
blogRouter.get('/:id', async (req, res, next) => {
  try{  
  const blog = await Blog.findById(req.params.id); 
  if(blog){
      res.json(blog); 
    } else {
      res.status(404).json({message: "Blog not found"}); 
    }
  } catch(err) {
    res.status(404).json({message: err.message})
  }
})

// PUT : edit blog
blogRouter.put('/edit/:id', async (req, res) => {

  const {title, content, author} = req.body; 
  const blogId = req.params.id;  

  try{  
    const blog = await Blog.findByIdAndUpdate(blogId, {
      title, 
      content
    })
    if(blog && author === undefined){
      res.json("Blog updated"); 
    }  else if(blog && author !== undefined) {
      res.status(400).json("This attribute cannot be changed")
    } else {
      res.status(500).json("This blog doesn't exist")
    }

  } catch (err){
    res.status(404).json({message: err.message})
  }
}) 

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

// POST: post a blog whilst logged in
blogRouter.post('/post', async (req, res)=>{

  const token = getTokenFrom(req)
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id); 
 
  // console.log(user)

  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    user :  user._id
  }); 

  try {
    const savedPost = await blog.save(); 
    user.blogs = user.blogs.concat(savedPost._id)
    await user.save(); 
    res.status(204).json({message : "succesful post"}); 

  } catch (err) {
    res.status(404).json({message: err.message})
  }
});

// DELETE: delete a blog 
blogRouter.delete('/:id', async (req, res)=>{
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id).populate("user"); 
    await blog.user.blogs.pull(blog)
    
    if(blog){
      res.json({message : "Blog deleted"}); 
    } else {
      res.status(404).json("No Blog with this id"); 
    }
    res.status(204).end()
  } catch (err){ 
    res.status(404).json(err); 
  }
})

module.exports = blogRouter; 