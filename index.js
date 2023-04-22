const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Seniority Hackathon Project!");
});


app.listen(5000, () => {
  console.log("listening");
});