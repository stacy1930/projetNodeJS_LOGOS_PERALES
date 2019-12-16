"use strict";

const mongoose = require("mongoose");

const ganttSchema = mongoose.Schema({
  name: String,
  description: String,
  daysOff: Date // mettre en timestamp
});

module.exports = mongoose.model("ganttSchema", ganttSchema);
