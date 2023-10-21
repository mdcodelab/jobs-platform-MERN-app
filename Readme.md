C L I E N T
- install normalize css and import it into Index.js before App.css
- establish global css styles

2. Home page

3. Error Page, Register page

4. setup global context

5. setup reducer.js

6. setup actions:
- DISPLAY_ALERT
-CLEAR_ALERT



S E R V E R
1. basic package.json structure:
"scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.6.2"
  }
}

command: npx nodemon server.js /npm start/node server.js
2. middleware folder:
- not-found.js return 404
- error-handler.js return 500, 4 params (the first is error), place it last,
 eventually place it with mongoose errors, showcase with async errors

3. create .env file

4. create db folder, connectDB file.

5. create controllers folder, authController.js and functions, export {register, login, updateUser}

6. create routes folder, authRoutes.js, setup express router, import functions form authController.js

7. same thing for jobs: jobsController.js (and functions: getAllJobs, createJob, updateJob, deleteJob) and
jobsRoutes.js

8. test the routes on insomnia: http://localhost:5000/api/v1/auth/(register, login or updateUser)
and http://localhost:5000/api/v1/jobs and http://localhost:5000/api/v1/stats etc.

9. model folder, user model - user.js, setup schema

10. mongoose custom email validation & validator (npm install validator)
  email: {
    type: String,
    required: [true, "Please provide email!"],
    validate: {
        validator: validator.isEmail,
        message: "Please provide a valid email"
    },
    unique: true,
  }

  11. complete authController.js:
  - import UserModel
  - await User.create({req.body});
  - if success 201 with json({user}) 
  - if error 500 with json({msg: "There was an error!}) 


12. not-found.js:
const notFound = (req, res) => {
res.status(404).send("Route does not exist!")
}

error-handler.js:
const errorHandler = (err, req, res, next) => {
console.log(err);
//res.status(500).json({msg: "There was an error!"}) or
res.status(500).json({msg: err});
//next(err); 
}

authController:
const register = async (req, res, next) => {
    try {
        const user = await UserModel.create(req.body);
        console.error("This is the register function");
        res.status(201).json({user});
    } catch (error) {
        //res.status(500).json({msg: "There was an error!"}) or
        console.log(error);
        next(error);
    }
13. npm install express-async-errors

 const register = async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({user});
}

14. install http status codes setup in both places: error-handler.js & authController.js
error-handler.js:
const errorHandler = (err, req, res, next) => {
//res.status(500).json({msg: "There was an error!"}) or
res.status(500).json({msg: err});
//next(err); 
}
becomes:
error-handler.js
const{StatusCodes}=requite("http-status-codes")
const errorHandler = (err, req, res) => {
  const defaultError = {
    statusCode: statusCodes.INTERNAL_SERVER_ERROR,
    msg: "Somethings goes wrong, try again later"
  }
  res.status(defaultError.statusCode).json(msg: err)
}

authController.js:
const register = async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(StatusCodes.OK).json({user});
}

15. set up error handler in the server

