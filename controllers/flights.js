const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

async function allflights(req, res) {
  try {
    const allFligths = await Flight.find({});
    res.status(200).json(allFligths);
  } catch (err) {
    res.json({ err, message: err.message });
  }
}

async function create(req, res) {
  try {
    const flight = new Flight(req.body);
    await flight.save().then((data) => {
      console.log(data);
      res.status(200).json(req.body);
    });
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(400).json({ error: err, message: err.message });
  }
}
async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const ticket = Ticket.find({ flight: flight._id });
    res.status(200).json(flight, ticket);
  } catch (err) {
    res.status(500).json({ error: err, message: err.message });
  }
}

module.exports = {
  allflights,
  create,
  show,
};
