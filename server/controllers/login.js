const jwt = require('jsonwebtoken'); 
const express = require('express'); 
const loginRouter = express.Router();
const User = require("../models/User"); 
const bcrypt = require('bcrypt');
require('dotenv/config'); 


loginRouter.get('/', function(req, res,) {
    res.send('hello');
});

loginRouter.post('/', async (req, res) => {
  // inputted username and password 
  const email = req.body.email;
  const passwordHash = req.body.password; 

  try{
    const existingUser = await User.findOne({ email });
    
      if(existingUser && await bcrypt.compare(passwordHash, existingUser.password)){
        const token = jwt.sign({id: existingUser._id, username: existingUser.username }, process.env.JWT_SECRET)
        console.log(token)
        console.log(existingUser)
        res.status(200).json({message: "Login succesful", user: existingUser, token:token})
    } else {
        return res.status(404).json({status : 'User does not exist !'})
    }
  } catch (err){
      res.json({message: err})
  }

})

module.exports = loginRouter; 