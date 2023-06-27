const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const { json } = require("express");
app.use(json());
app.use(cors());

const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(
    "mongodb+srv://ardhendu_init_:8436668381@cluster0.khw5z.mongodb.net/shopDB?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Db connected Successfully");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("app is running ");
});
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

// app.listen(process.env.PORT || 5000, () => {
//   console.log("Server is running on port 5000");
// });
