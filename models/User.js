const mongoose = require('mongoose');

// Define  a schema
const userSchema = mongoose.Schema({
    username : {type: String},
    password: {type: String}
})

// Export model 
module.exports = mongoose.model("User", userSchema); 