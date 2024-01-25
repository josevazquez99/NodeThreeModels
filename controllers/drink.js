const Drink = require("../models/drink");

const getDrinkById = async (req,res)=>{
  let id = req.params.id;
  try{
    const drink = await Drink.findById(id);
    res.status(200).json(drink);

  } catch (error){
    res.status(500).json({message:error});
  } 
  
};

const getDrink = async (req,res)=>{
    try{
      const drink = await Drink.find();
      res.status(200).json(drink);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addDrink = async (req, res) => {
    const drink = req.body;
    const newDrink = new Drink(drink);
    try{
      await newDrink.save();
      res.status(201).json(newDrink);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteDrink =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const drink = await Drink.findByIdAndDelete(id);
        res.status(204).json(drink);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putDrink = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const meal = await Drink.findByIdAndUpdate(id,body);
        res.status(200).json(meal);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getDrink,addDrink,deleteDrink,putDrink,getDrinkById};