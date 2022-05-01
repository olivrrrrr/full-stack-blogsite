const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
require('dotenv/config')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const blogRoute = require('./controllers/blog');
const userRoute = require('./controllers/user');

app.use('/api/blogs', blogRoute)
// app.use('/user', userRoute)

app.get("/", (req, res)=>{
    res.send("hello world")
})

mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('DB connected')
})

app.listen(3000)