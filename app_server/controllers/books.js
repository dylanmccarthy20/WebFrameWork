/* GET 'home' page */
const homelist = function(req, res){
  res.render('books-list', {
    title: 'The Irish Library - find a great book in our establishment',
    pageHeader: {
      title: 'The Irish Library',
      strapline: 'Find books that are for near you!'
    },
    sidebar: "Looking for a good read? The Irish Library helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the genre you're looking for.",
    books: [{
        name: 'Harry Potter and The Deathly Hollows',
        author: 'J.K Rowling',
        rating: 4,
        genre: ['Adventure', 'Fantasy', 'Mystery']
    }, {
        name: 'Charlie and The Chocolate Factory',
        author: 'Roald Dahl',
        rating: 4,
        genre: ['Fantasy', 'Fiction', 'Childrens Literature'],
    }, {
        name: 'THE BFG',
        author: 'Roald Dahl',
        rating: 3.5,
        facilities: ['Fantasy', 'Childrens Fantasy'],
    }]
  });
};

/* GET 'boook info' page */
const bookInfo = function(req, res){
  res.render('book-info', {
    title: 'Harry Potter and The Deathly Hollows',
    pageHeader: {
      title: 'Harry Potter and The Deathly Hollows'
    },
    sidebar: {
      context: 'is in the librarys inventory because it is a very popular book to readers of all ages,It also is one of the highest grossing books of all-time.',
      callToAction: 'If you\'ve read it and would you like to leave a review - or if you don\'t - want to help other people just like you.'
    },
    book: {
      name: 'Harry Potter and The Deathly Hollows',
      author: 'J.K Rowling',
      rating: 4,
      genre: ['Adventure', 'Fantasy', 'Mystery'],
      coords: {
        lat: 51.455041,
        lng: -0.9690884
      }
	  ,
      reviews: [{
        author: 'Simon Holmes',
        rating: 5,
        timestamp: '16 July 2013',
        reviewText: 'What a great book. I can\'t say enough good things about the book, It just blows my mind every time I read it....Great Book!!!'
      }, {
        author: 'Charlie Chaplin',
        rating: 3,
        timestamp: '16 June 2013',
        reviewText: 'It was okay. The plot wasn\'t great, but the condition of the book was fantastic.'
      }]
    }
  });
};

/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('book-review-form', {
    title: 'Review Harry Potter and The Deathly Hollows on THe Irish Library',
    pageHeader: { title: 'Review Harry Potter and THe Deathly Hollows' }
  });
};

module.exports = {
  homelist,
  bookInfo,
  addReview
};