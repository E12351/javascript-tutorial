var express = require('express');
// var fs = require("fs");
var app = express();

var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Express app listening at http://%s:%s', host, port)

});
app.use(express.static('public'));


