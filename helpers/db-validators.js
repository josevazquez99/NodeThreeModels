const Meal = require("../models/meal");
const User = require("../models/user");

const existsName = async (name,{req}) => {
    const nameDb = await Meal.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}


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
const checkPassword = async(password,{req}) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!regex.test(password)){
        throw new Error(`Password ${password} not valdid`);
    } 
}

const existsUserById = async (id,{req}) => {
    const idDb = await User.findOne({id});
    if(idDb){
        throw new Error(`Id ${id} not exist`);
    }
}

module.exports={existsName,existsEmail,existsLogin,checkPassword,existsUserById};