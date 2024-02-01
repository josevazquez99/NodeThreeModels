const Meal = require("../models/meal");

const existsName = async (name,{req}) => {
    const nameDb = await Meal.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}

const User = require("../models/user");

const existsEmail = async (email,{req}) => {
    const nameDb = await User.findOne({email});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${email} already exists in database`);
    }
}

const existsLogin = async (login,{req}) => {
    const nameDb = await User.findOne({login});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${login} already exists in database`);
    }
}


module.exports={existsName,existsEmail,existsLogin};