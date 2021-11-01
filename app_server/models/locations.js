const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: String,
  createdOn: {
    type: Date,
    'default': Date.now
  }
});

const BookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  genre: [String],
  coords: {
    type: [Number],
    index: '2dsphere'
  },
  reviews: [reviewSchema]
});

mongoose.model('Book', BookSchema);