const express = require('express'); 
const blogRouter = express.Router(); 
const jwt = require('jsonwebtoken'); 
const Blog = require('../models/Blog'); 
const User = require('../models/User')

// GET: all blogs
blogRouter.get('/', async (req, res) => {

  try {
    const blogs = await Blog.find({})
    res.json(blogs)
  } catch (err) {
    res.json({message: err})
  }

    Blog
    .find({})
    .then(blogs => {
      res.json(blogs)
    })
})

// GET: blogs by id
blogRouter.get('/:id', async (req, res, next) => {
  try{  
  const blog = await Blog.findById(req.params.id); 
  res.json(blog); 
  } catch(err) {
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

// POST: post a blog
blogRouter.post('/', async (req, res)=>{

  const token = getTokenFrom(req)
  console.log(process.env.JWT_SECRET)
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)
 
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })

  try {
    const savedPost = await blog.save(); 
    res.status(204).json(savedPost); 

  } catch (err) {
    res.status(404).json({message: err})
  }
});

// DELETE: delete a post 
blogRouter.delete('/:id', async (req, res)=>{
  try {
    await Blog.findByIdAndDelete(req.params.id); 
    res.status(204).end()
  } catch (err){ 
    res.status(404).json(err); 
  }
})

module.exports = blogRouter; 