import getPlayerStats from "./getPlayerStats";
import fullScoresMock from "./testData/fullScoresMock";
import players from "../players";

describe("getPlayerStats", () => {
  it("should return array containing each player", () => {
    const output = getPlayerStats(players, fullScoresMock);

    expect(output.length).toEqual(6);
  });

  it("should order by average score", () => {
    const output = getPlayerStats(players, fullScoresMock);

    expect(output[0].name).toEqual("Matt");
    expect(output[1].name).toEqual("Stu");
    expect(output[2].name).toEqual("Simon");
    expect(output[3].name).toEqual("Pete");
    expect(output[4].name).toEqual("Mark");
    expect(output[5].name).toEqual("Willan");
  });

  test.each`
    stat              | value
    ${"numberPlayed"} | ${5}
    ${"averageScore"} | ${90}
    ${"medianScore"}  | ${89}
    ${"minScore"}     | ${85}
    ${"maxScore"}     | ${98}
  `("The value for $stat should be $value", ({ stat, value }) => {
    const output = getPlayerStats(players, fullScoresMock);

    expect(output[0][stat]).toEqual(value);
  });

  it("should return the latest round details", () => {
    const output = getPlayerStats(players, fullScoresMock);

    expect(output[0].latestScore).toEqual({
      course: "Beauchief",
      score: 89,
      date: "2020-08-16"
    });
  });
});
