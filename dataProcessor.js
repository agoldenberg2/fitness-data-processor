
require("dotenv").config();
const { workoutCalculator } = require("./workoutReader");
const { healthMetricsCounter } = require("./healthReader");
// Main function to process workout and health data files
async function processFiles() {
  try {
    console.log(`Processing data for: ${process.env.USER_NAME}`);
// Read workout data
    console.log("📁 Reading workout data...");
    const workoutData = await workoutCalculator("./data/workouts.csv");
// Read health metrics data
    console.log("📁 Reading health data...");
    const healthCount = await healthMetricsCounter("./data/health-metrics.json");
// Display summary
    console.log("\n=== SUMMARY ===");
    console.log(`Workouts found: ${workoutData.count}`);
    console.log(`Total workout minutes: ${workoutData.totalMinutes}`);
    console.log(`Health entries found: ${healthCount}`);
    console.log(`Weekly goal: ${process.env.WEEKLY_GOAL} minutes`);
// Check if goal met
    if (workoutData.totalMinutes >= process.env.WEEKLY_GOAL) {
      console.log(`Congratulations ${process.env.USER_NAME}! You met your goal!`);
    } else {
      console.log(` Keep going ${process.env.USER_NAME}! You can do it!`);
    }
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}
// Execute the main function
processFiles();
