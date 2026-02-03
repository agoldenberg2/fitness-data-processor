// workoutReader.js
const fs = require("fs");
const csv = require("csv-parser");

async function workoutCalculator(filePath) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let totalMinutes = 0;

    const stream = fs.createReadStream(filePath);

    // Handle missing file
    stream.on("error", () => {
      reject(new Error("Workout file not found"));
    });

    stream
      .pipe(csv())
      .on("data", (row) => {
        count++;
        totalMinutes += Number(row.duration);
      })
      .on("end", () => {
        resolve({ count, totalMinutes });
      });
  });
}

module.exports = { workoutCalculator };
