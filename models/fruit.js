const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FruitSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    flavor:{
        type:String,
        required:true
    },
    weight: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Fruit",FruitSchema);