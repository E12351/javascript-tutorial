var express = require('express');
var fs = require("fs");
var app = express();

var server = app.listen(8000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Express app listening at http://%s:%s', host, port)

});
//
// Socket.io server listens to our app
// var io = require('socket.io').listen(server);

app.use(express.static('public'));
//
// // Send current time to all connected clients
// function sendTime() {
//     io.emit('time', { time: new Date().toJSON() });
// }
//
// // Send current time every 10 secs
// setInterval(sendTime, 10000);
//
// io.on('connection', function(socket) {
//     // Use socket to communicate with this particular client only, sending it it's own id
//     // socket.emit('welcome', { message: 'Welcome!', id: socket.id });
//
//     socket.on('admin_info', function(data) {
//         // console.log(data);
//         fs.writeFile("./public/config.json", JSON.stringify(data, null, 4), (err) => {
//             if (err) {
//                 console.error(err);
//                 return;
//             };
//         console.log("File has been created");
//     });
//     });
// });

