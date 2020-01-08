"use strict";
import { projectsSchema } from "./projectsSchema";
const mongoose = require("mongoose");

// let ObjectId = mongoose.Schema.Types.ObjectId; // A utiliser ?

const serviceSchema = mongoose.Schema({
  nameService: String,
  projects: [
    {
      projects: mongoose.Types.ObjectId,
      ref: "projectsSchema"
    }
  ]
});

module.exports = mongoose.model("serviceSchema", serviceSchema);
