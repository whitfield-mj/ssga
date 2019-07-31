import React from "react";
import { shallow } from "enzyme";
import Scorecards from "./Scorecards";

jest.mock("../data/scores", () => ({
  "2019-02-16": {
    course: "Tinsley",
    scores: {
      Matt: {
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
      Mark: {
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
      Matt: {
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
    shallow(<Scorecards />);
  });

  it("renders a scorecard for each score", () => {
    const output = shallow(<Scorecards />);
    expect(output.find("Scorecard").length).toBe(2);
  });

  it("passes in the appropriate props to Scorecards", () => {
    const output = shallow(<Scorecards />);
    const sc1 = output.find("Scorecard").first();
    const sc2 = output.find("Scorecard").last();

    expect(sc1.props().courseName).toEqual("Tinsley");
    expect(sc1.props().date).toEqual("2019-02-16");
    expect(sc2.props().scores).toEqual({
      Matt: {
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
    });
  });
});
