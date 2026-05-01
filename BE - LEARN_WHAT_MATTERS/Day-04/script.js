/* Use Express */

const express = require("express");
const app = express(); // All powers of express goes to app

/* EJS Setup */

// Set the view engine to EJS
app.set("view engine", "ejs");
app.use(express.static("./public"));

/* Routes Creation */
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000);
