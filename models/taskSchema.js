"use strict";

const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  start: Number,
  end: Number,
  percentageProgress: Number,
  color: String,
  linkedTask: Array,
  ressources: Array
});

module.exports = mongoose.model("taskSchema", taskSchema);
//task : [{ id : 0, name : "tache 1", desc : "toto", start : 1491680626329, end : 1491684607029, percentageProgress : 50, color  : "#fc0202", linkedTask : [], ressources : [] }],
