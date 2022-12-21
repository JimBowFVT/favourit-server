"use strict";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World! This is favour it server");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
