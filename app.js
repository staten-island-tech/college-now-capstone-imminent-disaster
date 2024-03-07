const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
require("./DB/mongoose");
const routes = require("./routers/index");
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () => {
  console.log("Server is up!");
});
