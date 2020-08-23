import playerData from "../players";
import scoresData from "../scores";
import { mean, median, sum, min, max } from "simple-statistics";

export default function getPlayerStats() {
  return playerData
    .map(({ id, name, initials }) => {
      const roundsPlayed = getAverageScoreForPlayer(id);
      const scoresArray = roundsPlayed.map(round => round.score);

      return {
        name,
        initials,
        numberPlayed: roundsPlayed.length,
        averageScore: Math.round(mean(scoresArray)),
        medianScore: median(scoresArray),
        minScore: min(scoresArray),
        maxScore: max(scoresArray),
        latestScore: roundsPlayed[0]
      };
    })
    .sort((a, b) => a.averageScore - b.averageScore);
}

function getAverageScoreForPlayer(playerId) {
  return Object.values(scoresData)
    .filter(round => Object.keys(round.scores).includes(String(playerId)))
    .map(round => ({
      course: round.course,
      score: sum(Object.values(round.scores[playerId])),
      date: round.date
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
