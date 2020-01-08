const mongoose = require("mongoose");

const ressourcesSchema = mongoose.Schema({
  name: String,
  cost: Number,
  type: String
});

module.exports = mongoose.model("ressourcesSchema", ressourcesSchema);

//     resources : [{ name : "Jérémy", cost : 500, type : "humain" }],
