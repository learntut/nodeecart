var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var favicon = require('favicon');
var exphbs = require('express-handlebars');

// app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname,'views'));
var app = express()
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
var hbs = exphbs.create({
				 extname: '.hbs',
				 defaultLayout:'main',
				 layoutsDir: app.get('views') + '/layouts',
				 partialsDir: app.get('views') + '/partials',
				 });

// set properties to app
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
// set application properties
// app.use(favicon())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));


app.get('/', function (req, res, next) {
    res.render('index');
});

app.listen(app.get('port'),function () {
	console.log('listening to ' + app.get('port'));
});

