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
npm install nodemon --save-dev

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

"start":"nodemon server"

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
authController.js:
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


16. create errors folder, with the following files:
- custom-error.js: 
class CustomError extends Error {
constructor(message) {
    super(message);
}
}

-not-found.js:
import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";

class NotFoundError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

-bad-request.js:
const { StatusCodes } = require("http-status-codes");
const { CustomError } = require("./custom-error.js");

class BadRequestError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

16.check for email already in use. In the authController: 
const userAlreadyExists = await UserModel.findOne({email});
    if(userAlreadyExists) {
        throw new BadRequestError("Email already in use!");
    }

17. hash/encrypt passwords
- install bcryptjs

- User Model
- import bcrypt from 'bcryptjs'
- await genSalt(10)
- await hash(password , salt)
- await compare(requestPassword , currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save',async function(){
  "this" points to instance created by UserSchema
  

  18. Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

19. JWT
- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
npm install jsonwebtoken
- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload,secret,options);
- createJWT - in the register function (authController);

20. Concurrently
- install Concurrently 
"scripts": {
  "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "start": "concurrently --kill-others-on-fail \"npm run server\" \" npm run client\""
}

run> npm start - entire app

21. Proxy setup - only works in development
- access from anywhere
- don't want to use full url

[cra proxy](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

```js
"proxy":"http://localhost:4000" - in the client package.json
```

- my preference to remove trailing slash /
- restart app

22. REGISTER USER SETUP
- client - appContext:
async function registerUser (currentUser) {
  console.log(currentUser);
}
-client - page - Register.js:
function onSubmit () {
-------------------
const currentUser = {name, email, password, isMember}
if(isMember) {console.log("Already a member!)}
else {registerUser(currentUser)}
}

23. install axios  -in cd client

24. REGISTER USER COMPLETE

authController.js:
async function registerUser (currentUser) {
        console.log(currentUser);
        dispatch({type: "REGISTER_USER_BEGIN"})
        try {
            const response = await axios.post("/api/v1/auth/register", currentUser);
            console.log(response);
            const {user, token, location}=response.data;
            dispatch({ type: "REGISTER_USER_SUCCESS", payload: {user, token, location}});
            //localStorage later
        } catch (error) {
            console.log(error.response);
            dispatch({type: "REGISTER_USER_ERROR", payload: {msg: error.response.data.msg}})
        }
        clearAlert();
    }

    register.js:
    else if(action.type === "REGISTER_USER_SUCCESS") {
        return {...state, isLoading: false, user: action.payload.user, 
            token: action.payload.token, location: action.payload.location,
        userLocation: action.payload.userLocation, jobLocation: action.payload.jobLocation,
    showAlert: true, alertType: "success", alertText: "User created! Redirecting ..."}

    } else if(action.type === "REGISTER_USER_ERROR") {
        return {...state, isLoading: false, showAlert: true, alertType: "danger", alertText: action.payload.msg}
    }

    25. REDIRECT USER to the dashboard
  Register.js:
React.useEffect(() => {
if(user) {
  setTimeout(() => {
    navigate("/");
  }, 3000)
}
}, [user, navigate]);

26. ADD/REMOVE user to/from localStorage
appContext.js:
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

async function registerUser () {
  ////////////////
addUserToLocalStorage({ user, token, location });
  ///////////////
}

 const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
    console.log("user registered", user, token, location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  }

  27. Install Morgan & setup
    http logger middleware for node.js
- [morgan docs](https://www.npmjs.com/package/morgan)
    import morgan from 'morgan';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

  28. unauthenticated.js in error folder
  const { StatusCodes } =require("http-status-codes");
const { CustomError } = require("./custom-error");

class UnauthenticatedError extends CustomError {
    constructor(message) {
        super(message) 
        this.statusCode = StatusCodes.UNAUTHORIZED; //401
    }
}

29. login function (authController)
onst login = async (req, res, next) => {
try {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  console.log(user);

  if (!email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  const passwordInDatabase = user.password; // password from database
  const candidatePassword = req.body.password; // password inserted by client

  if(passwordInDatabase && candidatePassword) {
    const isPasswordCorrect = passwordInDatabase === candidatePassword;
    if (isPasswordCorrect) {
      const token = user.createJWT();
      res.status(StatusCodes.OK).json({user: {
        email: user.email,
        password: user.password,
        lastName: user.lastName,
        location: user.location,
        name: user.name
      }, token, location: user.location})
    } else {
      throw new UnauthenticatedError("Invalid credentials!");
    }
  }

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials!");
  }
  
  //res.status(StatusCodes.OK).json({ user, token, location: user.location });
} catch (error) {
  next(error);
}
}

30. login front-end - same as loginRegister

31. Dashboard page formed by nested pages
App.js: 
<Routes>
        <Route path="/" element={<SharedLayout></SharedLayout>}>
        <Route index element ={<Stats></Stats>}></Route>
          <Route path="add-job" element={<AddJob></AddJob>}></Route>
          <Route path="all-jobs" element={<AllJobs></AllJobs>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
  
  32. SharedLayout.js;

import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to='all-jobs'>all jobs</Link>
        <Link to='add-job'>all jobs</Link>
      </nav>
      <Outlet />
    </div>
  );
};

```js
App.js

<Route index element={<Stats/>} >
```

33. Protected route
ProtectedRoute.js:
function ProtectedRoute({children}) {
    const {user}=useAppContext();

    if(!user) {
        return <Navigate to="/home"></Navigate>
    }
  return (children
  );
}

App.js:
<BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <SharedLayout></SharedLayout>
        </ProtectedRoute>}>
          <Route index element={<Stats></Stats>}></Route>
          <Route path="add-job" element={<AddJob></AddJob>}></Route>
          <Route path="all-jobs" element={<AllJobs></AllJobs>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  
  34. 






