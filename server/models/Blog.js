const mongoose = require('mongoose'); 

// Define a schema
const blogSchema = new mongoose.Schema({
  title: {type: String},
  content:{type: String},
  author: {type: String},  
  date: {type: Date, default: Date.now}, 
  user: {type: mongoose.Types.ObjectId, ref: "User"}
})

module.exports = mongoose.model('Blog', blogSchema)