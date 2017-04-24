const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
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
app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.get('/', function(req, res, next) {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3000, function() {
  console.log('server listening');
});


nunjucks.configure('views', {noCache: true});
