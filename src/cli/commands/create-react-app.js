const { execSync } = require("child_process");

module.exports = function (str) {
  console.log("");
  console.log("-------------------------------------------");
  console.log("");
  console.log("Please wait... Installing Create React App with Mantine UI");
  console.log("");
  console.log("-------------------------------------------");
  const source = ` cache/${str}`;
  const target = `${__dirname.split("/cli")[0]}/apps`;
  const cmd = `npx create-react-app ${source} --template typescript --force`;
  execSync(cmd);
  const postCmd = `mv ${source} ${target}`;
  execSync(postCmd);
  execSync('pnpm i');
};
