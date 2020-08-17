import React from "react";
import { shallow } from "enzyme";
import Scorecard from "./Scorecard";
const course = {
  name: "Tinsley",
  holes: [
    {
      par: 4
    },
    {
      par: 3
    },
    {
      par: 5
    },
    {
      par: 4
    }
  ],
  par: "16"
};

const scores = [
  {
    player: { id: 1, name: "Matt" },
    scores: [
      { score: 7, scoreType: "worse" },
      { score: 4, scoreType: "bogie" },
      { score: 5, scoreType: "par" },
      { score: 5, scoreType: "par" }
    ],
    total: 18
  },
  {
    player: { id: 2, name: "Pete" },
    scores: [
      { score: 3, scoreType: "birdie" },
      { score: 5, scoreType: "double" },
      { score: 6, scoreType: "bogie" },
      { score: 4, scoreType: "par" }
    ],
    total: 21
  }
];

function renderComponent({
  highlighted = ["birdies", "bogies", "doubles", "worse"]
} = {}) {
  return shallow(
    <Scorecard
      course={course}
      date="12/3/2019"
      scorecardData={scores}
      highlighted={highlighted}
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

  it("renders a par row", () => {
    const output = renderComponent();
    const pars = output.find("ParRow");
    expect(pars.props().rowHeader).toEqual("Par");
    expect(pars.props().par).toEqual("16");
    expect(pars.props().holes).toEqual(course.holes);
  });

  it("renders a score row for each player", () => {
    const output = renderComponent();
    expect(output.find("ScoreRow").length).toEqual(2);
  });

  it("renders score rows in order received", () => {
    const output = renderComponent();
    expect(
      output
        .find("ScoreRow")
        .at(0)
        .props().rowHeader
    ).toEqual("Matt");
    expect(
      output
        .find("ScoreRow")
        .last()
        .props().rowHeader
    ).toEqual("Pete");
  });

  it("adds a total score the rows", () => {
    const output = renderComponent();

    expect(
      output
        .find("ScoreRow")
        .at(0)
        .props().totalScore
    ).toEqual(18);
    expect(
      output
        .find("ScoreRow")
        .last()
        .props().totalScore
    ).toEqual(21);
  });
});
