"use strict";

const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema({
  name: String,
  desc: String,
  daysOff: {
    Mo: true,
    Tu: true,
    We: true,
    Th: true,
    Fr: true,
    Sa: false,
    Su: false
  },
  workingHours: { start: moment().hour(), end: moment().hour() },
  task: [
    {
      task: mongoose.Types.ObjectId,
      ref: "taskSchema"
    }
  ],
  groupTask: [
    {
      groupTask: mongoose.Types.ObjectId,
      ref: "groupTaskSchema"
    }
  ],
  resources: [
    {
      resources: mongoose.Types.ObjectId,
      ref: "ressourcesSchema"
    }
  ],

  milestones: [
    {
      milestones: mongoose.Types.ObjectId,
      ref: "milestonesSchema"
    }
  ]
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
