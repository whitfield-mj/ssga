import React from "react";
import scores from "../data/scores";
import courses from "../data/courses";
import Scorecard from "./Scorecard";
import "./scorecards.css";

function Scorecards({ highlighted }) {
  return (
    <div id="scorecards">
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
    </div>
  );
}

Scorecards.propTypes = {};

export default Scorecards;
