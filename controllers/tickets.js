const Ticket = require("../models/ticket");
const Flight = require("../models/flight");
const flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body)
    .then(() => res.json(req.body))
    .catch((err) => console.log(err));
}
