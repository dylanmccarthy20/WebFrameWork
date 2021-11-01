/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About The Irish Library',
    content: 'The Irish Library was created to help people find the right book and the right genre';
};

module.exports = {
  about
};