
const path = `${__dirname.split('/src')[0]}/.env`

require('dotenv').config({
  path
})

const express = require("express");
const app = express();
const PORT = process.env.WEBAPP_PORT || 3000
const { greet, _, add } = require("utilities");

app.get("/", (req, res) => {
  res.send(greet("Welcome to the Web Template Starter"));
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
