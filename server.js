const express = require("express");
const app= express();
require("dotenv").config();
const morgan = require("morgan");
const authenticateUser=require("./middleware/authenticateUser.js");

const notFound=require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

//connect and authenticate user
const connectDB = require("./db/connectDB");

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

//routers
app.get("/api/v1", (req, res) => {
    //throw Error("This error is from home route");
    res.send("Home page");
})

const authRoutes = require("./router/authRoutes.js");
app.use("/api/v1/auth", authRoutes);
const jobsRoutes=require("./router/jobsRoutes.js");
app.use("/api/v1/jobs", authenticateUser, jobsRoutes);

app.use(notFound);
app.use(errorHandler); //last one

const port = process.env.PORT || 4000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection to database")
        app.listen(port, () => {
          console.log(`server is listening at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();