import React from "react";
import { shallow } from "enzyme";
import Scorecards from "./Scorecards";

jest.mock("../data/scores", () => ({
  "2019-02-16": {
    course: "Tinsley",
    scores: {
      1: {
        1: 7,
        2: 4,
        3: 5,
        4: 5,
        5: 3,
        6: 3,
        7: 4,
        8: 5,
        9: 4,
        10: 4,
        11: 4,
        12: 5,
        13: 5,
        14: 7,
        15: 6,
        16: 6,
        17: 4,
        18: 4
      },
      2: {
        1: 7,
        2: 6,
        3: 8,
        4: 7,
        5: 4,
        6: 5,
        7: 10,
        8: 5,
        9: 4,
        10: 6,
        11: 6,
        12: 5,
        13: 6,
        14: 6,
        15: 4,
        16: 7,
        17: 5,
        18: 5
      }
    }
  },
  "2019-03-16": {
    course: "Tinsley",
    scores: {
      1: {
        1: 7,
        2: 4,
        3: 5,
        4: 5,
        5: 3,
        6: 3,
        7: 4,
        8: 5,
        9: 4,
        10: 4,
        11: 4,
        12: 5,
        13: 5,
        14: 7,
        15: 6,
        16: 6,
        17: 4,
        18: 4
      }
    }
  }
}));

describe("Scorecards", () => {
  it("renders without crashing", () => {
    shallow(<Scorecards highlighted={["birdie"]} />);
  });

  it("renders a scorecard for each score", () => {
    const output = shallow(<Scorecards highlighted={["birdie"]} />);
    expect(output.find("Scorecard").length).toBe(2);
  });

  it("passes in the course details to the Scorecard", () => {
    const output = shallow(<Scorecards highlighted={["birdie"]} />);
    const sc1 = output.find("Scorecard").first();

    expect(sc1.props().course.name).toEqual("Tinsley");
    expect(sc1.props().date).toEqual("16/2/2019");
  });

  it("passes in the score details to the Scorecard", () => {
    const output = shallow(<Scorecards highlighted={["birdie"]} />);
    const sc2 = output.find("Scorecard").last();

    expect(sc2.props().scorecardData).toEqual([
      {
        player: { id: 1, name: "Matt", initials: "MW" },
        scores: [
          { score: 7, scoreType: "worse" },
          { score: 4, scoreType: "bogie" },
          { score: 5, scoreType: "par" },
          { score: 5, scoreType: "bogie" },
          { score: 3, scoreType: "birdie" },
          { score: 3, scoreType: "birdie" },
          { score: 4, scoreType: "par" },
          { score: 5, scoreType: "bogie" },
          { score: 4, scoreType: "bogie" },
          { score: 4, scoreType: "par" },
          { score: 4, scoreType: "par" },
          { score: 5, scoreType: "bogie" },
          { score: 5, scoreType: "bogie" },
          { score: 7, scoreType: "worse" },
          { score: 6, scoreType: "worse" },
          { score: 6, scoreType: "bogie" },
          { score: 4, scoreType: "bogie" },
          { score: 4, scoreType: "par" }
        ],
        total: 85
      }
    ]);
  });

  it("passes in the highlight list that it receives", () => {
    const output = shallow(<Scorecards highlighted={["birdie"]} />);
    const sc1 = output.find("Scorecard").last();

    expect(sc1.props().highlighted).toEqual(["birdie"]);
  });
});
