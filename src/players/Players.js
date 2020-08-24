import React from "react";
import getPlayerStats from "../data/selectors/getPlayerStats";
import * as S from "./styles";
import Badge from "./Badge";
import players from "../data/players";
import scores from "../data/scores";
import courses from "../data/courses";

const Players = () => {
  const playerStats = getPlayerStats(players, scores, courses);
  return (
    <S.PlayersStatsPanels>
      {playerStats.map(player => (
        <S.PlayerStatsPanel key={player.name}>
          <Badge initials={player.initials} />
          <S.Stats>
            <S.MainStats>
              <S.AverageScore>x&#772; {player.averageScore}</S.AverageScore>
              <S.AverageOver>+{player.averageOver}</S.AverageOver>
            </S.MainStats>
            <S.LatestRound>
              {player.latestScore.score} - {player.latestScore.course}
            </S.LatestRound>
          </S.Stats>
        </S.PlayerStatsPanel>
      ))}
    </S.PlayersStatsPanels>
  );
};

export default Players;
