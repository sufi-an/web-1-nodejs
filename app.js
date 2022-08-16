const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

const userDataRoutes = require("./router/userdata");
const productRoutes = require("./router/product");
const sendHtmlRoutes = require('./router/sendHtml')

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", (req, res,next) => {
  next();
  });
app.use(userDataRoutes);
app.use(productRoutes);
app.use(sendHtmlRoutes)
app.listen(3000, () => {
  console.log("Node app running at port 3000");
});
