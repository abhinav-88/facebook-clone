const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

// Dynamic route mapping
readdirSync("./routes").map(r => app.use("/", require("./routes/" + r)));

// Database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to Mongodb"))
  .catch(err => console.log("Error connecting to mongodb.", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

