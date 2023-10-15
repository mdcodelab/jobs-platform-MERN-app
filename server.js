const express = require("express");
const app= express();
require("dotenv").config();

const notFound=require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

//connect and authenticate user
const connectDB = require("./db/connectDB");

app.use(express.json());

//routers
app.get("/", (req, res) => {
    //throw Error("This error is from home route");
    res.send("Home page");
})

const authRoutes = require("./router/authRoutes");
app.use("/api/v1/auth", authRoutes);
const jobsRoutes=require("./router/jobsRoutes");
app.use("/api/v1/jobs", jobsRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Connection to db")
        app.listen(port, () => {
          console.log(`server is listening at port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();