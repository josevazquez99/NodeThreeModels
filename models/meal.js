const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MealSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    flavor: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Meal",MealSchema);