import React, { Fragment } from "react";
import scores from "../data/scores";
import courses from "../data/courses";
import Scorecard from "./Scorecard";

function Scorecards({ highlighted }) {
  return (
    <Fragment>
      {Object.keys(scores).map(roundDate => (
        <Scorecard
          key={roundDate}
          courseName={scores[roundDate].course}
          courseHoles={courses[scores[roundDate].course]}
          date={roundDate}
          scores={scores[roundDate].scores}
          highlighted={highlighted}
        />
      ))}
    </Fragment>
  );
}

Scorecards.propTypes = {};

export default Scorecards;
