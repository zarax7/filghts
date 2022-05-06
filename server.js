var express = require("express");
var path = require("path");
var logger = require("morgan");
require("dotenv").config();
const parser = require("body-parser");
const urlencodedParser = parser.urlencoded({ extended: false });

var flightsRouter = require("./routes/flights");
var destinationsRouter = require("./routes/destinations");
const ticketRouter = require("./routes/tickets");

const app = express();

const port = process.env.PORT || 3001;
app.use(parser.json());
app.use(urlencodedParser);
app.use(logger("dev"));
app.use(express.json());

app.use("/flights", require("./routes/flights"));
app.use("/", destinationsRouter);
app.use("/", ticketRouter);
app.use(express.static(path.join(__dirname, "./build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
