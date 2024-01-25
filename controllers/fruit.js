const Fruit = require("../models/fruit");

const getFruitById = async (req,res)=>{
  let id = req.params.id;
  try{
    const fruits = await Fruit.findById(id);
    res.status(200).json(fruits);

  } catch (error){
    res.status(500).json({message:error});
  } 
  
};

const getFruit = async (req,res)=>{
    try{
      const fruits = await Fruit.find();
      res.status(200).json(fruits);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addFruit = async (req, res) => {
    const fruit = req.body;
    const newFruit = new Fruit(fruit);
    try{
      await newFruit.save();
      res.status(201).json(newFruit);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteFruit =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const fruit = await Fruit.findByIdAndDelete(id);
        res.status(204).json(fruit);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putFruit = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const meal = await Fruit.findByIdAndUpdate(id,body);
        res.status(200).json(meal);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getFruit,addFruit,deleteFruit,putFruit,getFruitById};