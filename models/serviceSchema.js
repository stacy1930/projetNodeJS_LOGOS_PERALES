"use strict";

const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId; // A utiliser ?

const serviceSchema = mongoose.Schema({
  nameService: String,
  projects: ObjectId // A utiliser ?
});

module.exports = mongoose.model("serviceSchema", serviceSchema);
