import getOrderedScores from "./getOrderedScores";

import courseMock from "./testData/courseMock";
import scoresMock from "./testData/scoresMock";

describe("getOrderedScores", () => {
  it("should return in order, lowest score first", () => {
    const output = getOrderedScores(scoresMock, courseMock);
    expect(output[0].player.name).toEqual("Matt");
    expect(output[1].player.name).toEqual("Stu");
    expect(output[2].player.name).toEqual("Mark");
    expect(output[3].player.name).toEqual("Willan");
  });

  it("should assign a total score to each person", () => {
    const output = getOrderedScores(scoresMock, courseMock);
    expect(output[0].total).toEqual(89);
    expect(output[1].total).toEqual(90);
    expect(output[2].total).toEqual(104);
    expect(output[3].total).toEqual(112);
  });

  it("should add a score type to the score per hole", () => {
    const output = getOrderedScores(scoresMock, courseMock);
    expect(output[2].scores[0]).toEqual({ score: 3, scoreType: "birdie" });
    expect(output[1].scores[6]).toEqual({ score: 4, scoreType: "par" });
    expect(output[0].scores[0]).toEqual({ score: 5, scoreType: "bogie" });
    expect(output[0].scores[1]).toEqual({ score: 5, scoreType: "double" });
    expect(output[0].scores[2]).toEqual({ score: 7, scoreType: "worse" });
  });
});
