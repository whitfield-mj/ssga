import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

function Scorecard({ courseName, date, courseHoles, scores, highlighted }) {
  const holeNos = Object.keys(courseHoles);
  const dateObj = new Date(date);
  const dateString = `${dateObj.getDate()}/${dateObj.getMonth() +
    1}/${dateObj.getFullYear()}`;
  const prefix = `${courseName}-${dateString}`;

  const holeParMap = holeNos.reduce((obj, hole) => {
    return {
      ...obj,
      [hole]: courseHoles[hole].par
    };
  }, {});

  function addTotals(player) {
    const total = Object.values(scores[player]).reduce(
      (sum, value) => sum + value,
      0
    );

    return { name: player, total };
  }

  return (
    <S.Scorecard>
      <h2>{`${courseName} - ${dateString}`}</h2>
      <S.ScorecardPanel>
        <table>
          <thead>
            <tr>
              <th>Hole</th>
              {holeNos.map(hole => (
                <th key={`${prefix}-${hole}`}>{hole}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <ParRow rowHeader="Par" pars={holeParMap} />
            {Object.keys(scores)
              .map(addTotals)
              .sort((a, b) => a.total - b.total)
              .map(player => (
                <ScoreRow
                  key={`${prefix}-${player.name}-scores`}
                  rowHeader={player.name}
                  scores={scores[player.name]}
                  totalScore={player.total}
                  holePars={holeParMap}
                  highlighted={highlighted}
                />
              ))}
          </tbody>
        </table>
      </S.ScorecardPanel>
    </S.Scorecard>
  );
}

Scorecard.propTypes = {
  courseName: PropTypes.string,
  date: PropTypes.string,
  courseHoles: PropTypes.objectOf(PropTypes.shape({ par: PropTypes.number })),
  scores: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number))
};

function ParRow({ rowHeader, pars }) {
  const total = Object.values(pars).reduce((sum, value) => sum + value, 0);

  return (
    <tr>
      <td>{rowHeader}</td>
      {Object.keys(pars).map(hole => (
        <HoleScore key={`${rowHeader}-${hole}`} score={pars[hole]} />
      ))}
      <td>{total}</td>
    </tr>
  );
}

function ScoreRow({ rowHeader, scores, totalScore, holePars, highlighted }) {
  return (
    <tr>
      <td>{rowHeader}</td>
      {Object.keys(scores).map(hole => (
        <HoleScore
          key={`${rowHeader}-${hole}`}
          score={scores[hole]}
          par={holePars[hole]}
          highlighted={highlighted}
        />
      ))}
      <td>{totalScore}</td>
    </tr>
  );
}

function HoleScore({ score, par, highlighted }) {
  const interestList = highlighted || [];

  const showScore = (score, difference) => {
    if (difference === 1 && interestList.includes("birdies"))
      return <S.birdie highlight={{}}>{score}</S.birdie>;

    if (difference === -1 && interestList.includes("bogies"))
      return <S.bogie>{score}</S.bogie>;

    if (difference === -2 && interestList.includes("doubles"))
      return <S.double>{score}</S.double>;

    if (difference < -2 && interestList.includes("worse"))
      return <S.worse>{score}</S.worse>;

    if (difference === 0 && interestList.includes("pars"))
      return <S.par>{score}</S.par>;

    return <span>{score}</span>;
  };

  return <td>{showScore(score, par - score)}</td>;
}

export default Scorecard;
