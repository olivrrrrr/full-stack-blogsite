const mongoose = require('mongoose');

// Define  a schema
const userSchema = mongoose.Schema({
    username : {type: String, required: true, unique: true},
    passwordHash: {type: String}
})

// Export model 
module.exports = mongoose.model("User", userSchema); 