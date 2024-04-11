const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});



app.get("/book", (req, res) => {
  res.render("book");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/package", (req, res) => {
  res.render("package");
});

app.use(express.static(path.join(__dirname,'public')));


app.post('/signup', async (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password
  };

  const existingUser = await collection.findOne({ email: data.email });
  if (existingUser) {
    res.send("User Already Exists. Please choose a different username.");
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword;
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.redirect('/');
  }
});

app.post('/login', async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (!check) {
      res.send("Email not found");
    } else {
      const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
      if (isPasswordMatch) {
        res.redirect('/home');
      } else {
        res.send('Wrong Password');
      }
    }
  } catch (error) {
    res.send("Error: " + error.message);
  }
});

app.post('/home', async (req, res) => {});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
