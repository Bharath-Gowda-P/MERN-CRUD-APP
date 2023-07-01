//import express
const express = require("express");
const app = express();

//get port number from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//use middlewares
app.use(express.json());

//db connection
const dbConnect = require("./configs/dbConnection");
dbConnect();

const cors = require("cors")
app.use(cors())

//routes
const TaskRoute = require("./routes/TaskRoutes");
app.use("/api/v1", TaskRoute);

//start the server
app.listen(PORT, () => {
  console.log(`App is started and running at Port: ${PORT}`);
});
