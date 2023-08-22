const mongoose = require("mongoose");

const weeklyVisitSchema = new mongoose.Schema({
  week: Number,
  userVisits: Number,
  guestVisits: Number,
});

const monthlyVisitSchema = new mongoose.Schema({
  month: String,
  year: Number,
  weeklyVisits: [weeklyVisitSchema],
});

const VisitData = mongoose.model("VisitData", monthlyVisitSchema);

module.exports = VisitData;
