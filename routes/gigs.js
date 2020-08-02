const express = require("express");
const router = express.Router();

const gigsControllers = require("../controllers/gigs");

router.get("/", gigsControllers.getGigs);

router.get("/add", gigsControllers.getAddGig);

router.post("/add", gigsControllers.postAddGig);

module.exports = router;
