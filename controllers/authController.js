const {StatusCodes}=require("http-status-codes");
const UserModel = require("../models/User");

const register = async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(StatusCodes.OK).json({user});
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

