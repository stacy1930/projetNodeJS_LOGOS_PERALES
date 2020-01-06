const express = require("express");
const router = express.Router();
const Gant = require("../models/ganttSchema");

//GET
router.get("/:id", async (req, res) => {
  try {
    const gant = await Gant.findById(req.params.id);
    res.json(gant);
  } catch (err) {
    res.json({ message: err });
  }
});

// LIST
router.get("/", async (req, res) => {
  try {
    const gants = await Gant.find();
    res.json(gants);
  } catch (err) {
    res.json({ message: err });
  }
});

// POST
router.post("/", async (req, res) => {
  const gant = new Gant({
    type: req.body.type,
    name: req.body.name,
    value: req.body.value
  });

  try {
    const savecGant = await gant.save();
    res.json(savedGant);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE
router.patch("/:id", async (req, res) => {
  try {
    const updateGant = await Gant.updateOne(
      { _id: req.params.id },
      {
        $set: {
          type: req.body.type,
          nem: req.body.name,
          value: req.body.value
        }
      }
    );
    res.json(updateGant);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const removeGant = await Gant.remove({ _id: req.params.id });
    res.json(removeGant);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
