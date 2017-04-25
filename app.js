const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const socketio = require('socket.io');
const app = express();
const routes = require('./routes');

// app.use('*', function(req, res, next) {
//   console.log(req.method, req.originalUrl, res.statusCode)
//   next();
// });

// app.use('/special', function(req, res, next) {
//   console.log('You\'re very special!');
//   next();
// });

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

// app.get('/', function(req, res, next) {
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

// app.listen(3000, function() {
//   console.log('server listening');
// });


var server = app.listen(3000, function() {
  console.log('server listening');
});

var io = socketio.listen(server);

nunjucks.configure('views', {noCache: true});

app.use('/', routes(io));

// io.on('connection', function (socket) {
//   console.log('connected to sockets from server side!')
//   socket.emit('connect');
//   socket.on('newTweet', function (data) {
//     console.log(data);
//   });
// });

