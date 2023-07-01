const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connection successful"))
    .catch((error) => {
      console.log(error);
      console.log("Problem with the DB connection");
    });
};

module.exports = dbConnect;
