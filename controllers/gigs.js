const { request } = require("express");

const db = require("../config/database");
const Gig = require("../models/Gig");

exports.getGigs = async (req, res, next) => {
  try {
    const gigs = await Gig.findAll();
    res.render("gigs", {
      gigs,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getAddGig = (req, res, next) => {
  res.render("add");
};

exports.postAddGig = async (req, res, next) => {
  let { title, technologies, budget, description, contact_email } = req.body;

  await Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  });

  res.redirect("/gigs");
};
