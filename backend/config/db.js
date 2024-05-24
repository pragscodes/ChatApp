const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  const MONGO_URI =
    "mongodb+srv://pragatheeswarib2020:pragathib2112@cluster0.3joodyk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Optional: Increase timeout to 5 seconds
      connectTimeoutMS: 10000, // Optional: Increase connection timeout to 10 seconds
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
