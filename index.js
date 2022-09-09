const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

//Server node Socket
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(port, ( err) => {
    if(err) throw new Error(err);
    console.log(`Server corriendo on http://localhost:${port}`);
});
