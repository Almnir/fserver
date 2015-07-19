var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  db.File.findAll().then(function (files) {
    res.render('index', {
      title: 'File Service MVC',
      files: name
    });
  });
});
