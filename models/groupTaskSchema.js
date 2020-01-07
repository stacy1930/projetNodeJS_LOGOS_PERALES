"use strict";

const mongoose = require("mongoose");

const groupTaskSchema = mongoose.Schema({
  name: String,
  start: Date.now(),
  end: Date.now()
});

module.exports = mongoose.model("groupTaskSchema", groupTaskSchema);

//     groupTask : [{ name : "optional", start : Date.now(), end : Date.now() }],
