const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const quizRoutes = require("./routes/quizRouts");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Correct MongoDB connection string
const mongoURI = "mongodb://localhost:27017/neet-rank-predictor";

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Routes
app.use("/api/quiz", quizRoutes);
app.use("/api/user", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
