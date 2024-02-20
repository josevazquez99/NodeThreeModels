const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const drinkRoutes = require("./routes/drink");
const fruitRoutes = require("./routes/fruit");
const mealRoutes = require("./routes/meal");
const userRoutes = require("./routes/user");
const loginRouter = require("./routes/login")
const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
require('dotenv').config()
//SECRET=d82bc92f35b5d5ee6d751dec2b73da2681546bcf626acd75b32a101710d431a4
async function main() {
    await mongoose.connect("mongodb+srv://jv319069:Lopera9912@cluster0.gwomnic.mongodb.net/");
    console.log("Conectado")
  }
  
main().catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"))
app.use('/drink', drinkRoutes);
app.use('/fruit', fruitRoutes);
app.use('/meal', mealRoutes);
app.use('/user',userRoutes)
app.use('/auth',loginRouter)

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000");
});