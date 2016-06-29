var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio' });
});

/* about page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Myself' });
});

/*photography page*/
router.get('/photography', function(req, res, next) {
  res.render('photography', { title: 'Photograhy' });
});

/*web work page*/
 router.get('/web', function(req, res, next) {
  res.render('web', { title: 'Web Development' });
});

/*digital art page*/
router.get('/art', function(req, res, next) {
  res.render('art', { title: 'Design Work' });
});

/*contact page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
