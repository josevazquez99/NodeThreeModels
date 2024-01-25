const Meal = require("../models/meal");

const getMeal = async (req,res)=>{
    try{
      const meal = await Meal.find();
      res.status(200).json(meal);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addMeal = async (req, res) => {
    const meal = req.body;
    const newMeal = new Meal(meal);
    try{
      await newMeal.save();
      res.status(201).json(newMeal);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteMeal =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const meal = await Meal.findByIdAndDelete(id);
        res.status(204).json(meal);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putMeal = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const meal = await Meal.findByIdAndUpdate(id,body);
        res.status(200).json(meal);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getMeal,addMeal,deleteMeal,putMeal};