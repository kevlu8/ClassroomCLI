require("dotenv").config();

const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({
   extended: true
}));

app.get("/", (req, res) => {
   res.render("index");
})

app.get("/register", (req, res) => {
   res.send("dick");
})

app.get("/login", (req, res) => {
   res.send("penis");
})

app.listen(process.env.PORT, () => {
   console.log(`Listening on port ${process.env.PORT}`);
})