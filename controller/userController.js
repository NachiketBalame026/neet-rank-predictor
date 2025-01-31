const User = require("../models/User");
const { predictRank } = require("../utils/rankPredictor");

exports.getQuizHistory = async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.id });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user.quiz_history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.predictRank = async (req, res) => {
  try {
    const user = await User.findOne({ user_id: req.params.id });
    if (!user) return res.status(404).json({ message: "User not found" });

    const rank = predictRank(user.quiz_history);
    res.status(200).json({ predicted_rank: rank });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
