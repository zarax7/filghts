const Flight = require("../models/flight");

async function create(req, res) {
  try {
    const flight = Flight.findById(req.params.id);
    // flight.destinations.push(req.body);
    await destination.save();
    res.redirect(`/flights/${destination._id}`);
  } catch (err) {
    res.status(500).json({ err });
  }
}
module.exports = {
  create,
};
