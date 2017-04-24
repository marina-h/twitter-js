const express = require( 'express' );
const app = express();

app.get('/', function(req, res, next) {
  res.send('Welcome to our cool app!');
});

app.listen(3000, function() {
  console.log('server listening');
});
