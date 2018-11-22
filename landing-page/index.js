const path = require("path");
const express = require("express");
const accepts = require("accepts");

const app = express();

app.get("/", (req, res) => {
  const accept = accepts(req);
  console.log("LANDING PAGE CALLED");
  console.log("Headers", req.headers);
  res.setHeader("Cache-Control", "private, max-age=6000");
  res.setHeader("Vary", "Accept");

  switch (accept.type(["json", "html"])) {
    case "json":
      res.setHeader("Content-Type", "application/json");
      res.send('{"hello":"world!"}');
      break;
    case "html":
    default:
      res.setHeader("Content-Type", "text/html");
      res.sendFile(path.resolve("index.html"));
      break;
  }
});

app.listen(process.env.PORT, () => {
  console.log("started at port", process.env.PORT);
});
