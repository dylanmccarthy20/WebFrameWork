const express = require('express');
const router = express.Router();
const ctrlBook = require('../controllers/book');
const ctrlOthers = require('../controllers/others');

/* Books pages */
router.get('/', ctrlBook.homelist);
router.get('/book', ctrlBook.bookInfo);
router.get('/book/review/new', ctrlBook.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;