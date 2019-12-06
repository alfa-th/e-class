const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const session = require("express-session");



const app = express();

// Serve Logger Middleware
//app.use(logger);

app.use(session({
  name: "sid",
  secret: 'kunci rahasia sesi',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 1000 * 60 * 60 * 2,
    sameSite: true
  }
}))

const db = require("./config/keys.js").MongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log("Koneksi database sukses"))
  .catch(err => console.log(err));


// Serve Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve Gamers API Route
// app.use("/api/mahasiswa", require("./routes/api/mahasiswa"));

// Homepage Route
app.get("/", (req, res) => {
  res.render("index")
});


app.use("/admin", require("./routes/admin.js"));
app.use("/dosen", require("./routes/dosen.js"));
app.use("/mahasiswa", require("./routes/mahasiswa.js"));

const PORT = process.env.PORT || 5000;

// Serve Static Folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server started in port", PORT);
});
