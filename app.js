const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  res.send("kue");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
