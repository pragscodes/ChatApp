const express = require("express");
const path = require("path");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server starts on port ${PORT}`.yellow.bold));
