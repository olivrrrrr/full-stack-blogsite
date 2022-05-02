const jwt = require('jsonwebtoken'); 
const express = require('express'); 
const loginRouter = express.Router();
const User = require("../models/User"); 
const bcrypt = require('bcrypt')
require('dotenv/config'); 


loginRouter.get('/', function(req, res,) {
    res.send('hello');
});

loginRouter.post('/', async (req, res) => {
    // inputted username and password 
    const username  = req.body.username;
    const passwordHash = req.body.passwordHash; 

    console.log(passwordHash)
    const user = await User.findOne({username});

    console.log(user.passwordHash)

    if(await bcrypt.compare(passwordHash, user.passwordHash)){
        const token = jwt.sign({id: user._id, username: user.username }, process.env.JWT_SECRET)
        console.log(token, 'hi')
    } else {
        return res.json({status : 'error'})
    }
})

module.exports = loginRouter; 