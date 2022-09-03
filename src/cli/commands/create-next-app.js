const { execSync } = require("child_process");

module.exports = function (str) {
  console.log("");
  console.log("-------------------------------------------");
  console.log("");
  console.log("Please wait... Creating Next App");
  console.log("");
  console.log("-------------------------------------------");
  const source = ` cache/${str}`;
  const target = `${__dirname.split("/cli")[0]}/apps`;
  const cmd = `npx create-next-app@latest --ts ${source}`;
  execSync(cmd);
  const postCmd = `mv ${source} ${target}`;
  execSync(postCmd);
  execSync('pnpm i');
};
