const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
require("./DB/mongoose");
const routes = require("./routers/index");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.post("/profile", upload.single("avatar"), function (req, res, next) {
  res.send(req.file);
});
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
