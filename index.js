const express = require("express");
let PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.listen(PORT, () => {
  console.log("App running on port %s. Visit http://localhost:%s", PORT, PORT);
});
