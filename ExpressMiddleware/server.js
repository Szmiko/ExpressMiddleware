var express = require('express');
var app = express();

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żadaniu /store');
	next();
});

app.get('/store', function(req, res) {
	console.log('To jest sklep');
});

app.listen(3000);

