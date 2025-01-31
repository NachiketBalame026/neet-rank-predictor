const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  quiz_history: [
    {
      quiz_id: { type: Number, required: true },
      score: { type: Number, required: true },
      accuracy: { type: Number, required: true },
      response_map: { type: Map, of: Number }, // Key: Question ID, Value: Selected Option ID
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
