const express = require("express");
const db = require('../utils/database')
const HousePrice = require("../models/hosuePriceModel")

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Getting Data From MongoDB...")
    const result = await HousePrice.find({});

    console.log(result[0]);

    res.render("index", { houses: result });
  } catch {
    res.render("index", { houses: [{}] });
  }

});

//Delete doc
router.get("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id);

    console.log("Deleting Data From MongoDB...")

    const result = await HousePrice.findByIdAndDelete(id);

    console.log(result);

    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/");
  }

});



module.exports = router;
