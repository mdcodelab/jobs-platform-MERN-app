const authenticateUser = async (req, res, next) => {
console.log("authenticate user");
next();
}

module.exports=authenticateUser;