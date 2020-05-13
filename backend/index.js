const express = require('express');
const app = express();

const conn = require('./server.js');
const path = require('path');
const ejs = require('ejs');
// const routes = require('./routes');
const cors = require('cors');


const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(cors(), conn.conn)
io.on('connection', socket => { console.log ('Socket connection: ' + socket.id)})

server.listen(3003, () => { console.log(`Server Online`)});