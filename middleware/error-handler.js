const errorHandler = (err, req, res, next) => {
console.log(err);
res.send(500).json({msg: "There was an error!"})
}

module.exports=errorHandler;