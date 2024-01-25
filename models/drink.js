const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Drink",DrinkSchema);