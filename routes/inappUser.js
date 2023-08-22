const router = require("express").Router();
const VisitData = require("../models/VisitData");

router.get("/", async (req, res) => {
  try {
    let products = await VisitData.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(err);
  }
});
module.exports = router;
