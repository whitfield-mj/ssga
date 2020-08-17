import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

function Scorecard({ date, course, scorecardData, highlighted }) {
  const prefix = `${course.name}-${date}`;
  return (
    <S.Scorecard>
      <h2>{`${course.name} - ${date}`}</h2>
      <S.ScorecardPanel>
        <table>
          <thead>
            <tr>
              <th>Hole</th>
              {course.holes.map((hole, index) => (
                <th key={`${prefix}-${index}`}>{hole.par}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <ParRow rowHeader="Par" holes={course.holes} par={course.par} />

            {scorecardData.map(playerScore => {
              return (
                <ScoreRow
                  key={`${prefix}-${playerScore.player.name}-scores`}
                  rowHeader={playerScore.player.name}
                  scores={playerScore.scores}
                  totalScore={playerScore.total}
                  highlighted={highlighted}
                />
              );
            })}
          </tbody>
        </table>
      </S.ScorecardPanel>
    </S.Scorecard>
  );
}

Scorecard.propTypes = {
  date: PropTypes.string.isRequired,
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    holes: PropTypes.arrayOf(
      PropTypes.shape({ par: PropTypes.number.isRequired })
    ),
    par: PropTypes.number.isRequired
  }).isRequired,
  scorecardData: PropTypes.arrayOf(
    PropTypes.shape({
      player: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }),
      scores: PropTypes.arrayOf(
        PropTypes.shape({
          score: PropTypes.number,
          scoreType: PropTypes.string
        })
      ),
      total: PropTypes.number
    }).isRequired
  ),
  highlighted: PropTypes.arrayOf(PropTypes.string)
};

function ParRow({ rowHeader, holes, par }) {
  return (
    <tr>
      <td>{rowHeader}</td>
      {holes.map((hole, index) => (
        <td key={`${rowHeader}-${index}`}>{hole.par}</td>
      ))}
      <td>{par}</td>
    </tr>
  );
}

function ScoreRow({ rowHeader, scores, totalScore, highlighted }) {
  const scoreComponent = (scoreType, score) => {
    const options = {
      birdie: <S.birdie>{score}</S.birdie>,
      par: <S.par>{score}</S.par>,
      bogie: <S.bogie>{score}</S.bogie>,
      double: <S.double>{score}</S.double>,
      worse: <S.worse>{score}</S.worse>
    };
    return highlighted.includes(scoreType) ? (
      options[scoreType]
    ) : (
      <span>{score}</span>
    );
  };

  return (
    <tr>
      <td>{rowHeader}</td>
      {scores.map((hole, index) => (
        <td key={index}>{scoreComponent(hole.scoreType, hole.score)}</td>
      ))}
      <td>{totalScore}</td>
    </tr>
  );
}

export default Scorecard;
