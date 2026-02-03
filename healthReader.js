const fs = require("fs").promises;

async function healthMetricsCounter(filePath) {
  const data = await fs.readFile(filePath, "utf8");
  const json = JSON.parse(data);

  return json.length;
}

module.exports = { healthMetricsCounter };
