import React from "react";
import PropTypes from "prop-types";

Scorecard.propTypes = {
  courseName: PropTypes.string,
  date: PropTypes.string
};

function Scorecard({ courseName, date, courseHoles, scores }) {
  const dateObj = new Date(date);
  const dateString = `${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
  return (
    <div className="scorecard">
      <h2>{`${courseName} - ${dateString}`}</h2>
      <div className="scorecard-panel">
        <table>
          <thead>
            <tr>
              <th scope="col">Hole</th>
              {courseHoles
                .map((value, hole) => <th key={hole}>{hole}</th>)
                .toList()}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Par</td>
              {courseHoles
                .map((value, hole) => <td key={hole}>{value.par}</td>)
                .toList()}
              <td>{courseHoles.reduce((sum, value) => sum + value.par, 0)}</td>
            </tr>

            {scores
              .map((holeScores, player) => {
                return (
                  <tr key={player}>
                    <td>{player}</td>
                    {holeScores
                      .map((score, hole) => <td key={hole}>{score}</td>)
                      .toList()}
                    <td>
                      {" "}
                      {holeScores.reduce((sum, value) => sum + value, 0)}{" "}
                    </td>
                  </tr>
                );
              })
              .toList()}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scorecard;
