#! /usr/bin/env node

const { program } = require("commander");
const createReactApp = require("./commands/create-react-app");
const createNextApp = require("./commands/create-next-app");
const createUIPackage = require("./commands/create-ui-package");
const createExpressApp = require("./commands/create-express-app");

program
  .command("create-react-app")
  .description("Create React UI")
  .argument("<string>", "Name of project")
  .option("--react", "Create React App")
  .option("--next", "Create Next App")
  .option("--ui", "Create UI Package")
  .action((str, options) => {
    if (Object.keys(options).includes("react")) createReactApp(str);
    if (Object.keys(options).includes("next")) createNextApp(str);
    if (Object.keys(options).includes("ui")) createUIPackage(str);
  });

  program
  .command("create-express-app")
  .description("Create a Backend using ExpressJS")
  .argument("<string>", "Name of project")
  .action((str, options) => createExpressApp(str));


program.parse();
