const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
require('dotenv/config'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Import Routes
const blogRoute = require('./controllers/blog');
const userRoute = require('./controllers/user');

app.use('/api/blogs', blogRoute)
app.use('/api/users', userRoute)

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('DB connected')
})

app.listen(3000)