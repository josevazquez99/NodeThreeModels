const Meal = require("../models/meal");

const existsName = async (name,{req}) => {
    const nameDb = await Meal.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}

module.exports={existsName};