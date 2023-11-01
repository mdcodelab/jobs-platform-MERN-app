const {StatusCodes}=require("http-status-codes");
const UserModel = require("../models/User");
const {BadRequestError} = require("../errors/bad-request.js");


const register = async (req, res, next) => {

    try {
        const {name, email, password}=req.body;

    if(!name || !email || !password) {
        throw new BadRequestError("Please provide all values!")
    }

       const user = await UserModel.create({ name, email, password });
    res.status(StatusCodes.OK).json({ user });
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

