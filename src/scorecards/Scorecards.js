import React, { Component } from "react";
import scores from "../data/scores";
import Scorecard from "./Scorecard";
import "./scorecards.css";

import PropTypes from "prop-types";

class Scorecards extends Component {
  render() {
    return (
      <div id="scorecards">
        <header>
          <h1>Scorecards</h1>
        </header>
        {scores
          .get("rounds")
          .map((round, key) => (
            <Scorecard
              key={key}
              courseName={round.get("course")}
              courseHoles={scores.getIn(["courses", round.get("course")])}
              date={key}
              scores={round.get("scores")}
            />
          ))
          .toList()}
      </div>
    );
  }
}

Scorecards.propTypes = {};

export default Scorecards;
