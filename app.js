const express = require( 'express' );
const morgan = require('morgan');
const app = express();

// app.use('*', function(req, res, next) {
//   console.log(req.method, req.originalUrl, res.statusCode)
//   next();
// });

// app.use('/special', function(req, res, next) {
//   console.log('You\'re very special!');
//   next();
// });

app.use(morgan('combined'));

app.get('/', function(req, res, next) {
  res.send('Welcome to our cool app!');
});

app.listen(3000, function() {
  console.log('server listening');
});
