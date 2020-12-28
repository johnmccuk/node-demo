var express = require('express');

var defaultRoutes = express.Router();

defaultRoutes.get('/', function (req, res) {
    res.send('Base route!!');
});


module.exports = defaultRoutes;