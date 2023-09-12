const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");

const prijavaSchema = new mongoose.Schema({
  ime: String,
  prezime: String,
  email: String,
  pol: String,
  kom: String,
});

const Prijava = mongoose.model("prijava", prijavaSchema);

app.use(express.json());

app.use(cors());

app.post("/api/prijava", (req, res) => {
  console.log(req.body);

  fs.writeFile("./jsoncic.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err);
      return res.json("Error saving json file");
    }
  });

  Prijava.create(req.body);

  res.json({ success: true });
});

mongoose.connect(
  "mongodb+srv://graleee:graleee@cluster0.qtz15.mongodb.net/?retryWrites=true&w=majority"
);
app.listen(5000, () => {
  console.log("Server slusa na portu 5000");
});
