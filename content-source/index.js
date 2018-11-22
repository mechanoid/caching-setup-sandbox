const path = require("path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("CONTENT SOURCE CALLED");
  res.sendFile(path.resolve("index.html"));
  // res.status(500).send("");
});

app.listen(process.env.PORT, () => {
  console.log("started at port", process.env.PORT);
});
