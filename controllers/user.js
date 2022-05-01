const express = require('express'); 
const userRouter = express.Router();
const bcrypt = require('bcrypt'); 

const User = require('../models/User')

userRouter.get('/', async (req, res)=>{
    try{
        const users = await User.find({}); 
        res.json(users); 
    } catch (err){
        res.status(404).json({message : err}); 
    }
})

userRouter.post('/', async (req, res)=>{

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
        username: req.body.username, 
        passwordHash
    })

    const savedUser = await user.save();
    res.json(savedUser);

})


module.exports = userRouter; 