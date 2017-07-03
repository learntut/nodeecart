var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var favicon = require('favicon');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ShoppingCart');
var category = require('./server/category/route');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 	console.log('Db opened ');
});
var app = express()
app.set('port', process.env.PORT || 3300);
app.set('views', path.join(__dirname,'views'));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.set('port', process.env.PORT || 3300);
// app.set('views', __dirname + '/views');
var hbsengine = exphbs.create({
				 extname: '.hbs',
				 defaultLayout:'main',
				 layoutsDir: app.get('views') + '/layouts',
				 partialsDir: app.get('views') + '/partials',
				 });
// set properties to app
app.engine('hbs',hbsengine.engine);
app.set('view engine','hbs');
// set application properties
// app.use(favicon())
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
app.use(express.bodyParser());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
// app.use(category);
category(app);
// app.get('/', function (req, res, next) {
//     res.render('index');
// });

app.listen(app.get('port'),function () {
	console.log('listening to ' + app.get('port'));
});

