const router = require("express").Router();
const MonthlySales = require("../models/MonthlySale");

router.get("/", async (req, res) => {
  try {
    let products = await MonthlySales.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
