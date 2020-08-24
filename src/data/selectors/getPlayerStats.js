import { mean, median, sum, min, max } from "simple-statistics";

export default function getPlayerStats(playerData, scoresData, courseData) {
  return playerData
    .map(({ id, name, initials }) => {
      const roundsPlayed = getRoundsStatsForPlayer(id, scoresData, courseData);
      const scoresArray = roundsPlayed.map(round => round.score);
      const overParArray = roundsPlayed.map(round => round.overPar);

      return {
        name,
        initials,
        numberPlayed: roundsPlayed.length,
        averageScore: Math.round(mean(scoresArray)),
        medianScore: median(scoresArray),
        minScore: min(scoresArray),
        maxScore: max(scoresArray),
        latestScore: roundsPlayed[0],
        averageOver: Math.round(mean(overParArray))
      };
    })
    .sort((a, b) => a.averageScore - b.averageScore);
}

function getRoundsStatsForPlayer(playerId, scoresData, courseData) {
  return Object.values(scoresData)
    .filter(round => Object.keys(round.scores).includes(String(playerId)))
    .map(round => {
      const score = sum(Object.values(round.scores[playerId]));
      return {
        course: round.course,
        score,
        date: round.date,
        overPar: score - courseData[round.course].par
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
