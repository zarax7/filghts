var express = require("express");
var router = express.Router();
const flightsCtrl = require("../controllers/flights");
/* GET users listing. */
router.get("/show", flightsCtrl.allflights);

router.get("/show/:id", flightsCtrl.show);

router.post("/create", flightsCtrl.create);

module.exports = router;
