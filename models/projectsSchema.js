"use strict";

const mongoose = require("mongoose");
import { ressourcesSchema } from "./ressourcesSchema.js";
import { milestonesSchema } from "./milestonesSchema.js";

const projectsSchema = mongoose.Schema({
  name: String,
  desc: String,
  daysOff: toto, // mettre en timestamp
  workingHours: toto,
  task: taskSchema,
  groupTask: toto,
  resources: ressourcesSchema,
  milestones: milestonesSchema
});

module.exports = mongoose.model("projectsSchema", projectsSchema);

// {
//   nameService : "Demo",
//   projects : [
//  {
//     name : "projet de test",
//     desc : "Description du projet, blablabla...",
//     daysOff : { Mo : true, Tu : true,  We : true, Th : true, Fr : true, Sa : false, Su : false },
//     workingHours : { start : moment().hour(), end : moment().hour() },
//     task : [{ id : 0, name : "tache 1", desc : "toto", start : 1491680626329, end : 1491684607029, percentageProgress : 50, color  : "#fc0202", linkedTask : [], ressources : [] }],
//     groupTask : [{ name : "optional", start : Date.now(), end : Date.now() }],
//     resources : [{ name : "Jérémy", cost : 500, type : "humain" }],
//     milestones : [{ name : "jalon °1", date : Date.now() }]
//    }
//   ]
//  };
