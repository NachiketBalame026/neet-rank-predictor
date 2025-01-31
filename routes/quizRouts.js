const express = require("express");
const quizController = require("../controller/quizController");

const router = express.Router();

router.get("/quiz/:id", quizController.getQuiz);
router.post("/quiz/submit", quizController.submitQuiz);

module.exports = router;
