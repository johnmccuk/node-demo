var express = require('express');

var adminRoutes = express.Router();

adminRoutes.get('/', function (req, res) {
    res.send('Admin route!!');
});


module.exports = adminRoutes;