const mongoose = require("mongoose");

const productSalesSchema = new mongoose.Schema({
  name: String, // Product name (e.g., "Basic Tees")
  salesPercentage: Number, // Sales percentage for the product
});

const monthlySalesSchema = new mongoose.Schema({
  month: String, // Month (e.g., "April")
  year: Number, // Year (e.g., 2023)
  products: [productSalesSchema], // Array of product sales data
});

const MonthlySales = mongoose.model("MonthlySales", monthlySalesSchema);

module.exports = MonthlySales;
