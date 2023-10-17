const {StatusCodes}=require("http-status-codes");
// const errorHandler = (err, req, res, next) => {
// console.log(err);
// //res.status(500).json({msg: "There was an error!"}) or
// res.status(500).json({msg: err});
// //next(err); 
// }

const errorHandler = (err, req, res, next) => {
    const defaultError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "There was an error!"
    };
    res.status(defaultError.statusCode).json({ msg: defaultError.message });
}

module.exports = errorHandler;


