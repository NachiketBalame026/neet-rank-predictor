const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.get("/user/:id/history", userController.getQuizHistory);
router.get("/user/:id/predict-rank", userController.predictRank);

module.exports = router;
