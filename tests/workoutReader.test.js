// Test your workoutReader.js module hereconst { workoutCalculator } = require("./workoutReader");
const { workoutCalculator } = require("../workoutReader");

test("reads workout CSV correctly", async () => {
  const result = await workoutCalculator("./data/workouts.csv");
  expect(result.count).toBeGreaterThan(0);
  expect(result.totalMinutes).toBeGreaterThan(0);
});

test("throws error for missing workout file", async () => {
  await expect(
    workoutCalculator("./data/badfile.csv")
  ).rejects.toThrow();
});
