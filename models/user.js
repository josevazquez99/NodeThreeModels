const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    login: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },  
    password: {
        type:String,
        required:true
    },    
    rol: {
        type:Boolean,
        required:true
    },   
    active: {
        type:Boolean,
        required:true
    }
    
})

module.exports = mongoose.model("User",UserSchema);