var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}	
};

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);
// app.get('/', function (req, res) {
// 	res.send('Hello Subham express!');
// });

app.get('/about',middleware.requireAuthentication, function (req, res) {
	res.send('We are in about page');
});

app.use(express.static(__dirname + '/public'));
app.listen(port, function(){
	console.log('Express Server Started at '+ port +'...');
});