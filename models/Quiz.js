const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quiz_id: { type: Number, required: true },
  title: { type: String, required: true },
  topic: { type: String, required: true },
  difficulty_level: { type: String },
  questions: [
    {
      question_id: { type: Number, required: true },
      description: { type: String, required: true },
      options: [
        {
          option_id: { type: Number, required: true },
          description: { type: String, required: true },
          is_correct: { type: Boolean, required: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Quiz", quizSchema);
