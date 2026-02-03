const { healthMetricsCounter } = require("../healthReader");

test("reads health JSON file correctly", async () => {
  const count = await healthMetricsCounter("./data/health-metrics.json");
  expect(count).toBeGreaterThan(0);
});

test("throws error for missing health file", async () => {
  await expect(
    healthMetricsCounter("./data/missing.json")
  ).rejects.toThrow();
});


