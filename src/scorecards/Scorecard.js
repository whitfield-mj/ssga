import React from "react";
import PropTypes from "prop-types";

Scorecard.propTypes = {
  courseName: PropTypes.string,
  date: PropTypes.string,
  courseHoles: PropTypes.objectOf(PropTypes.shape({ par: PropTypes.number })),
  scores: PropTypes.objectOf(PropTypes.objectOf(PropTypes.number))
};

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
            <ScoreRow rowHeader="Par" scores={holeParMap} />
            {Object.keys(scores)
              .map(addTotals)
              .sort((a, b) => a.total - b.total)
              .map(player => (
                <ScoreRow
                  key={`${prefix}-${player.name}-scores`}
                  rowHeader={player.name}
                  scores={scores[player.name]}
                  totalScore={player.total}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ScoreRow({ rowHeader, scores, totalScore }) {
  const total =
    totalScore || Object.values(scores).reduce((sum, value) => sum + value, 0);

  return (
    <tr>
      <td>{rowHeader}</td>
      {Object.keys(scores).map(hole => (
        <td key={`${rowHeader}-${hole}`}>{scores[hole]}</td>
      ))}
      <td>{total}</td>
    </tr>
  );
}

export default Scorecard;
