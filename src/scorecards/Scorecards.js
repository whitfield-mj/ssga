import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Scorecard from "./Scorecard";

import scores from "../data/scores";
import courses from "../data/courses";
import getOrderedScorecardData from "../data/selectors/getOrderedScores";

function Scorecards({ highlighted }) {
  return (
    <Fragment>
      {Object.keys(scores).map(roundDate => {
        const dateObj = new Date(roundDate);
        const dateString = `${dateObj.getDate()}/${dateObj.getMonth() +
          1}/${dateObj.getFullYear()}`;

        const coursePlayed = courses[scores[roundDate].course];
        const roundScores = scores[roundDate].scores;
        return (
          <Scorecard
            key={roundDate}
            date={dateString}
            course={coursePlayed}
            scorecardData={getOrderedScorecardData(roundScores, coursePlayed)}
            highlighted={highlighted}
          />
        );
      })}
    </Fragment>
  );
}

Scorecards.propTypes = {
  highlighted: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Scorecards;
