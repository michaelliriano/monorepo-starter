const { execSync } = require("child_process");

module.exports = function (str) {
  console.log("");
  console.log("-------------------------------------------");
  console.log("");
  console.log("Please wait... Creating Express App");
  console.log("");
  console.log("-------------------------------------------");
  const source = ` cache/${str}`;
  const target = `${__dirname.split("/cli")[0]}/apps`;
  const cmd = `npx express-generator ${source}`;
  execSync(cmd);
  const postCmd = `mv ${source} ${target}`;
  execSync(postCmd);
};
