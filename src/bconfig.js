const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/book");

connect.then(() => {
  console.log("Database for book_form connected Successfully");
})
.catch(() => {
  console.log("Database for_bookform cannot be connected");
});

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  guests: {
    type: Number,
    required: true
  },
  arrivals: {
    type: Date,
    required: true
  },
  leaving: {
    type: Date,
    required: true
  }
});

const collection = new mongoose.model("book_form",bookSchema);

module.exports = collection;