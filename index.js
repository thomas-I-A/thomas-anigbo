import express from "express";
import bodyParser from "body-parser";


const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/faq", (req, res) => {
  res.render("faq.ejs");
});

app.get("/Bio", (req, res) => {
  res.render("bio.ejs");
});

app.get("/Essays.html", (req, res) => {
  res.render("essays.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/quotes", (req, res) => {
  res.render("quotes.ejs");
});

app.get("/raq", (req, res) => {
  res.render("raq.ejs");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});