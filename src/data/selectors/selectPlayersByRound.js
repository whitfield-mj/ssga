import scores from "../scores";
import players from "../players";

export default function selectPlayersByRound(roundKey) {
  return Object.keys(scores[roundKey].scores).map(playerId =>
    players.find(player => player.id === playerId)
  );
}
