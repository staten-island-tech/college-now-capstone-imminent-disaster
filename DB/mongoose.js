const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(`${process.env.DATABASE}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"));

mongoose.connection.on("error", (err) => {
  console.log(`${err.message}`);
  console.log("mongoose error");
});
