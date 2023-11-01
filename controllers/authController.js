const {StatusCodes}=require("http-status-codes");
const UserModel = require("../models/User");
const {BadRequestError} = require("../errors/bad-request.js");


const register = async (req, res, next) => {

    try {
        const {name, email, password}=req.body;

    if(!name || !email || !password) {
        throw new BadRequestError("Please provide all values!")
    }

    const userAlreadyExists = await UserModel.findOne({email});
    if(userAlreadyExists) {
        throw new BadRequestError("Email already in use!");
    }

       const user = await UserModel.create({ name, email, password });
       const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user: {email: user.email, lastName: user.lastName, location: user.location, 
        name: user.name}, token, location: user.location});
    } catch (error) {
        next(error);
    }
}

const login = async (req, res) => {
try {
    
} catch (error) {
    
}
}

const updateUser = async (req, res) => {
    res.send("Update user")
}

module.exports = {register, login, updateUser};

