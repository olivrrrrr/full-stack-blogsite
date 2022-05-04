const mongoose = require('mongoose');

// Define  a schema
const userSchema = mongoose.Schema({
    username : {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, require: true}, 
    blogs: [{type: mongoose.Types.ObjectId, ref: "blogs"}]
})

// Export model 
module.exports = mongoose.model("User", userSchema); 