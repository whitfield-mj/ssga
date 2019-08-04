import React from "react";
import PropTypes from "prop-types";

function Scorecard({ courseName, date, courseHoles, scores }) {
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
    <div className="scorecard">
      <h2>{`${courseName} - ${dateString}`}</h2>
      <div className="scorecard-panel">
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
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
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

function ScoreRow({ rowHeader, scores, totalScore, holePars }) {
  return (
    <tr>
      <td>{rowHeader}</td>
      {Object.keys(scores).map(hole => (
        <HoleScore
          key={`${rowHeader}-${hole}`}
          score={scores[hole]}
          par={holePars[hole]}
        />
      ))}
      <td>{totalScore}</td>
    </tr>
  );
}

function HoleScore({ score, par }) {
  const label = () => {
    const difference = par - score;
    if (difference === 1) return "birdie";
    if (difference > 1) return "eagle";
    if (difference === -1) return "bogie";
    if (difference < -1) return "double";

    return "par";
  };

  return (
    <td className={label()}>
      <span>{score}</span>
    </td>
  );
}

export default Scorecard;
