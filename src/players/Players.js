import React from "react";
import getPlayerStats from "../data/selectors/getPlayerStats";
import * as S from "./styles";
import Badge from "./Badge";
import players from "../data/players";
import scores from "../data/scores";

const Players = () => {
  const playerStats = getPlayerStats(players, scores);
  return (
    <S.PlayersStatsPanels>
      {playerStats.map(player => (
        <S.PlayerStatsPanel key={player.name}>
          <Badge initials={player.initials} />
          <S.Stats>
            <div>x&#772; {player.averageScore}</div>
            <div>
              {player.latestScore.score} - {player.latestScore.course}
            </div>
          </S.Stats>
        </S.PlayerStatsPanel>
      ))}
    </S.PlayersStatsPanels>
  );
};

export default Players;
