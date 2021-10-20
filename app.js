require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const { PORT } = process.env;
console.log(process.env.PORT);

// HandelBars
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials", (err) => {
  if (err) {
    console.log(err);
  }
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { name: "Cesar Morales", title: "Software engineer" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { name: "Cesar Morales", title: "Software engineer" });
});

app.get("/elements", (req, res) => {
  res.render("elements", { name: "Cesar Morales", title: "Software engineer" });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404page.html");
});

app.listen(PORT);
