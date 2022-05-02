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


// POST: create new user 
userRouter.post('/', async (req, res)=>{

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(req.body.passwordHash, saltRounds);

  // if(!username || !passwordHash || typeof username !== 'string'){
  //   return res.json({status : 'error'})
  // }

  try{
       const user = new User({
        username: req.body.username, 
        passwordHash
    })

    const savedUser = await user.save();
    res.json(savedUser);
  } catch(err){
      res.json(err.message)
  }
   

})


module.exports = userRouter; 