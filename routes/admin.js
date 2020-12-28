var express = require('express');
var routes = express.Router();

routes.get('/', function (req, res) {
    res.send('Admin route!!');
});

module.exports = routes;