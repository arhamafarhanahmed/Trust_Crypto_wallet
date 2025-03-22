require("dotenv").config();
require("./database/connection");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/router");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api", router);

const port = 8005;

app.listen(port, () => {
  console.log(`server is connected to ${port}`);
});
