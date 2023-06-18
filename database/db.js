const mongoose = require("mongoose");

// use mongoose to connect to mongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectMongoDB;
