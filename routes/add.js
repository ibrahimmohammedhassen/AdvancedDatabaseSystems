const express = require("express");
const db = require("../utils/database");
const HousePrice = require("../models/hosuePriceModel")

const router = express.Router();

router.get("/", (req, res) => {
  res.render("add");
});

router.post("/", async (req, res) => {

  if (req.body.id <= 0) {

    console.log("Insert New House Price");

    try {
      const houseprice = await HousePrice.create(req.body)

      res.status(200).render("add", {
        addformstatus: "Your house price has been added 🥰",
      });

    } catch (error) {
      console.log(error);
      res
        .status(500)
        .render("add", { addformstatus: "Please try again 🥺" });
    }
  } else {

    console.log("Update House Price" + req.body.id);

    try {
      const houseprice = await HousePrice.findByIdAndUpdate(req.body.id, req.body)

      res.status(200).render("add", {
        addformstatus: "Your house price has been Updated 🥰",
      });

    } catch {
      res
        .status(500)
        .render("add", { addformstatus: "Please try again 🥺" });
    }
  }

});

router.get("/:id", async (req, res) => {

  console.log("Getting New House Price By:" + req.params.id);

  try {
    const houseprice = await HousePrice.findById(req.params.id);

    res.status(200).render("add", {
      housePrice: houseprice,
    });

  } catch {
    res
      .status(500)
      .render("add", { addformstatus: "Please try again 🥺" });
  }
});



module.exports = router;