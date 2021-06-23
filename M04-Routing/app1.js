"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;

app.get("/", (req, res) => {
  //handle root
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});
