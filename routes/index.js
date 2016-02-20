var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Smith Designs Portfolio' });
});

/* about page*/
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Smith Designs' });
});

/*photography page*/
router.get('/photography', function(req, res, next) {
  res.render('photography', { title: 'Photograhy by Smith Designs' });
});

/*web work page*/
 router.get('/web', function(req, res, next) {
  res.render('web', { title: 'Web Development Work by Smith Designs' });
});

/*digital art page*/
router.get('/art', function(req, res, next) {
  res.render('art', { title: 'Digital Art by Smith Designs' });
});

/*contact page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Smith Designs!' });
});

module.exports = router;
