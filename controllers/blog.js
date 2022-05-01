const express = require('express'); 
const blogRouter = express.Router(); 

const Blog = require('../models/Blog'); 

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

// POST: post a blog
blogRouter.post('/', async (req, res)=>{
 
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