const express = require("express");
const app= express();
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

app.listen(port, () => {
console.log(`server is listening at port ${port}`)
})