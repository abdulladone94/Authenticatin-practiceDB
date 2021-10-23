import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Started port 3000");
});
