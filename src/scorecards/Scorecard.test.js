import React from "react";
import { shallow } from "enzyme";
import Scorecard from "./Scorecard";
const holes = {
  1: {
    par: 4
  },
  2: {
    par: 3
  },
  3: {
    par: 5
  },
  4: {
    par: 4
  }
};

const scores = {
  Matt: {
    1: 7,
    2: 4,
    3: 5,
    4: 5
  },
  Pete: {
    1: 3,
    2: 3,
    3: 3,
    4: 3
  }
};

function renderComponent() {
  return shallow(
    <Scorecard
      courseName="Tinsley"
      date="2019-03-12"
      courseHoles={holes}
      scores={scores}
    />
  );
}

describe("Scorecards", () => {
  it("renders a header row with hole number", () => {
    const output = renderComponent();
    expect(output.find("th").length).toBe(6);
    expect(
      output
        .find("th")
        .first()
        .text()
    ).toEqual("Hole");
    expect(
      output
        .find("th")
        .last()
        .text()
    ).toEqual("Total");
  });

  it("renders a score row with pars", () => {
    const output = renderComponent();
    const pars = output.find("ScoreRow").first();
    expect(pars.props().rowHeader).toEqual("Par");
    expect(pars.props().scores).toEqual({
      1: 4,
      2: 3,
      3: 5,
      4: 4
    });
  });

  it("renders a score row for pars and each player", () => {
    const output = renderComponent();
    expect(output.find("ScoreRow").length).toEqual(3);
  });

  it("renders score rows with lowest score first", () => {
    const output = renderComponent();
    expect(
      output
        .find("ScoreRow")
        .at(1)
        .props().rowHeader
    ).toEqual("Pete");
    expect(
      output
        .find("ScoreRow")
        .last()
        .props().rowHeader
    ).toEqual("Matt");
  });

  it("adds a total score the rows", () => {
    const output = renderComponent();

    expect(
      output
        .find("ScoreRow")
        .at(1)
        .props().totalScore
    ).toEqual(12);
    expect(
      output
        .find("ScoreRow")
        .last()
        .props().totalScore
    ).toEqual(21);
  });
});
