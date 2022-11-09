const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("/names", (req, res) => {
  res.send("kue2");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
