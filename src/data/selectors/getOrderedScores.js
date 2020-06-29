import players from "../players";

export default function getOrderedScorecardData(roundScores, coursePlayed) {
  return Object.keys(roundScores)
    .map(playerId => {
      const playerScores = getPlayerScores(playerId, roundScores, coursePlayed);
      return {
        player: getPlayer(playerId),
        scores: playerScores,
        total: totalOf(playerScores)
      };
    })
    .sort((a, b) => a.total - b.total);
}

function getPlayer(playerId) {
  return players.find(player => Number(player.id) === Number(playerId));
}

function getPlayerScores(playerId, roundScores, coursePlayed) {
  return Object.keys(roundScores[playerId]).map(hole => ({
    score: roundScores[playerId][hole],
    scoreType: getScoreType(coursePlayed, hole, roundScores[playerId][hole])
  }));
}

function totalOf(playerScores) {
  return playerScores.reduce((sum, value) => sum + value.score, 0);
}

function getScoreType(course, hole, score) {
  const scoreParDifference = course.holes[hole - 1].par - score;

  switch (scoreParDifference) {
    case 1:
      return "birdie";
    case 0:
      return "par";
    case -1:
      return "bogie";
    case -2:
      return "double";
    default:
      return "worse";
  }
}
