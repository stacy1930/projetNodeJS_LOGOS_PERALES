"use strict";

const mongoose = require("mongoose");

const milestonesSchema = mongoose.Schema({
  name: String,
  date: Date.now()
});

module.exports = mongoose.model("milestonesSchema", milestonesSchema);

//     milestones : [{ name : "jalon °1", date : Date.now() }]
