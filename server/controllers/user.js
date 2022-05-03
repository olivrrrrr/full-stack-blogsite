const express = require('express'); 
const userRouter = express.Router();
const bcrypt = require('bcrypt'); 

const User = require('../models/User')


// GET : all users
userRouter.get('/all', async (req, res)=>{
   
    try{
        let users = await User.find({});
        if(!users){
            res.status(404).json({message: "No Users Found"})
        } else {
            res.json(users)
        }    
    } catch (err){
        res.status(404).json({message : err}); 
    }
    
})

// POST: create new user 
userRouter.post('/register', async (req, res)=>{
  
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(req.body.password, saltRounds);

  try{
    let existingUser = await User.findOne({ username : req.body.username});
    if(existingUser){
        res.status(400).json({message : "User Already Exists."})
     } else if (req.body.username === undefined || req.body.username.length < 3) {
      res.status(400).json({ error: "username too short" });
    } else if(req.body.email === undefined || !req.body.email.includes('@')){
      res.status(400).json({ error: "valid email is required" });
    }else if (req.body.password === undefined || req.body.password.length < 3) {
      res.status(400).json({ error: "password too short" });
    } else {
        const newUser = new User({
        username: req.body.username, 
        email: req.body.email,
        password: passwordHash
      })
    
    const savedUser = await newUser.save();
    res.json(savedUser);
     }
  } catch(err){
    res.status(400).json(err.message)
  } 
})


module.exports = userRouter; 