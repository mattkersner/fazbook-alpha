var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.User.findAll({}).then(function(users) {
    res.render('users/index', {
      title: 'fazbook',
      users: users
    });
  });
});

module.exports = router;
