require("dotenv").config();
const mongoose = require("mongoose");
async function connectDB() {
  // Database connection 

     mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((connection) => {
      console.log(`Connected to Mongo database "${connection.connections[0].name}"`)
    })
    .catch((error) => {
      console.log(error);
      console.error('error connecting to mongo')
    })
}
module.exports = connectDB;