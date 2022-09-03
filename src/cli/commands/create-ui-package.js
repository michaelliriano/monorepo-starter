const { execSync } = require("child_process");

module.exports = function (str) {
  console.log("");
  console.log("-------------------------------------------");
  console.log("");
  console.log("Please wait... Creating a UI Packing using Mantine UI");
  console.log("");
  console.log("-------------------------------------------");
  const source = ` cache/${str}`;
  const target = `${__dirname.split("/cli")[0]}/packages`;
  const cmd = `npx create-react-app ${source} --template typescript --force`;
  execSync(cmd);
  const postCmd = `mv ${source} ${target}`;
  execSync(postCmd);
};
