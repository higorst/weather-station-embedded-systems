const cors = require('cors');
const express = require('express');
const router = require('./router');

const app = express();
const parser = require('body-parser');
const urlencodedParser = parser.urlencoded({limit: '200mb', extended: true});

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors());

app.use(urlencodedParser)
app.use(parser.text({ limit: '200mb' }));
app.use(parser.json({ limit: '200mb' }));

app.get('/', (req, res) => {
    res.send({ ok: true });
});

app.use( (request, response, next) => {
    request.io = io;
    return next();
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

app.use(router);

server.listen(3000, () => {
    console.log('Server started on port 3000.');
});