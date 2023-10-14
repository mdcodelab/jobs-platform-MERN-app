const express = require("express");
const app= express();
require("dotenv").config();
const connectDB = require("./db/connectDB");
const notFound=require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");


app.use(express.json());



app.get("/", (req, res) => {
    throw Error("This error is from home route");
    res.send("Home page");
})

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