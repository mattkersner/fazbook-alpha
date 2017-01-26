var express = require('express');
var router = express.Router();
var models = require('../server/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'fazbook' });
});
router.get('/new', function(req, res, next) {
  res.render('users/new', { title: 'fazbook' });
});

router.post('/', function(req, res, next) {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob
  }).then(function() {
    res.redirect('/users')
  });
});

module.exports = router;

// How can i kill my localhost?
// maybe search port 3000 in activity monitor?
