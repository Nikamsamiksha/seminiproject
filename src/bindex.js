const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./bconfig');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/book", (req, res) => {
  res.render("book");
});


app.use(express.static(path.join(__dirname,'public')));


app.post('/book', async (req, res) => {
  try {
    const formData = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      location: req.body.location,
      guests: req.body.guests,
      arrivals: req.body.arrivals,
      leaving: req.body.leaving
    };

    const booking = await collection.insertMany(formData);
    console.log(booking);
    res.redirect('/book');
  } catch (error) {
    res.send("Error: " + error.message);
  }
});

app.post('/book', async (req, res) => {});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on Port: ${port}`);
});
