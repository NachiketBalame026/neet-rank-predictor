const predictRank = (quizHistory) => {
  // Calculate average score and accuracy
  const totalQuizzes = quizHistory.length;
  const totalScore = quizHistory.reduce((sum, quiz) => sum + quiz.score, 0);
  const totalAccuracy = quizHistory.reduce(
    (sum, quiz) => sum + quiz.accuracy,
    0
  );

  const averageScore = totalScore / totalQuizzes;
  const averageAccuracy = totalAccuracy / totalQuizzes;

  // Simple rank prediction formula (can be improved)
  const rank = Math.round(
    ((100 - averageAccuracy) * (1000 - averageScore)) / 10
  );

  return rank;
};

module.exports = { predictRank };
