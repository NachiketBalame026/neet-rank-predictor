const Quiz = require("../models/Quiz");
const User = require("../models/User");

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ quiz_id: req.params.id });
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { user_id, quiz_id, response_map, score, accuracy } = req.body;
    const user = await User.findOne({ user_id });

    if (!user) {
      const newUser = new User({
        user_id,
        quiz_history: [{ quiz_id, score, accuracy, response_map }],
      });
      await newUser.save();
    } else {
      user.quiz_history.push({ quiz_id, score, accuracy, response_map });
      await user.save();
    }

    res.status(201).json({ message: "Quiz submitted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
